import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Usuario } from '../registro/usuario.model';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  count_position:any = 0;
  options: GeolocationOptions;
  currentPos: Geoposition;
  userEmail: string;
  places: Array<any>;
  usuario: Usuario = new Usuario();
  public isError = false;
  public isLogged = false;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  @ViewChild('map') mapElement: ElementRef;
  map = google.maps.Map;
  home = google.maps.Marker;
  infowindow = new google.maps.InfoWindow();
  isTracking = false;
  trackedRoute = [];
  currentMapTrack = null;
  positionSubscription: Subscription;
  locationWatchStarted: boolean;
  locationSubscription: any;
  start = '';
  end = '';
  direction = google.maps.DirectionsResult;


  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private geolocation: Geolocation,
    private plt: Platform,
    private iab: InAppBrowser,
    ) { }

  ionViewDidEnter() {
    this.loadMap();
    this.loadUserPosition();
  }



  ngOnInit() {

    this.authService.userDetails().subscribe(res => {
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    });
  }
  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }
  loadMap() {
    let latLng = new google.maps.LatLng(40.0000000, -4.0000000);

    let styles = google.maps.MapTypeStyle = [
      {
        featureType: 'poi',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      }
    ];

    let mapOptions = google.maps.MapOptions = {
      center: latLng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: styles,
      mapTypeControl: false
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  loadUserPosition() {
    this.plt.ready().then(() => {
      this.geolocation.getCurrentPosition().then(resp => {
        const lat = resp.coords.latitude;
        const lng = resp.coords.longitude;
        this.focusMap(lat, lng);
        this.addMarker(
          lat,
          lng,
          'Tu posición'
        );
      });
    });
  }

  focusMap(lat, lng) {
    let latLng = new google.maps.LatLng(lat, lng);
    this.map.setCenter(latLng);
    this.map.setZoom(15);
  }

  addMarker(lat, lng, info) {
    let latLng = new google.maps.LatLng(lat, lng);

    this.home = new google.maps.Marker({
      map: this.map,
      position: latLng,
      animation: google.maps.Animation.DROP,
      icon:
        'https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png'
    });

    let infoWindow = new google.maps.InfoWindow({
      content: info
    });
    this.home.addListener('click', () => {
      infoWindow.open(this.map, this.home);
    });
  }

  removeMarker() {
    this.home.setMap(null);
  }

  toggleMarker() {
    if (this.home.getAnimation() !== null) {
      this.home.setAnimation(null);
    } else {
      this.home.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  private setCurrentLocation() {
    let my_coords:Array<any> = [];
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        my_coords[0] = position.coords.latitude;
        my_coords[1] = position.coords.longitude;

      });
    }
    return my_coords;
  }

  showNearby() {
    let request = google.maps.places.PlaceSearchRequest = {
      type: 'restaurant',
      radius: 400,
      location: this.home.getPosition()
    };
    
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch(request, (results, status) => {
      this.places=results;
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let place of results) {
          this.addNearbyMarker(place);
             
        }
      }
    });
  }

  findPlace(e: CustomEvent) {
    let request = {
      query: e.detail.value
    };

    let service = new google.maps.places.PlacesService(this.map);

    service.textSearch(request, (results, status) => {
      console.log('results: ', results);
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let place of results) {
          this.addNearbyMarker(place);
        }
      }
    });
  }

  addNearbyMarker(place = google.maps.places.PlaceResult) {
    const icon = {
      url: place.icon,
      scaledSize: new google.maps.Size(25, 25),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    };

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location,
      icon: icon
    });

    let request = google.maps.places.PlaceSearchRequest = {
      location: this.home.getPosition()
    };

    let distancia = this.getDistanceFromLatLonInKm(
      request.location.lat(),
      request.location.lng(),
      place.geometry.location.lat(),
      place.geometry.location.lng());
      console.log(distancia);

    marker.addListener('click', () => {
      let photo = '';

      if (place.photos.length > 0) {
        photo = place.photos[0].getUrl({ maxWidth: 100, maxHeight: 100 });
      }
      this.infowindow
        .setContent(`<img src="${photo}" style="width: 100%;max-height: 100px;object-fit: contain;"/><br>
      <b>${place.name}</b><br>${place.vicinity}</b><br>${distancia*1000} metros`);
      this.infowindow.open(this.map, marker);
    });
  }

  startTracking() {
    this.isTracking = true;
    this.trackedRoute = [];
    if (this.currentMapTrack) {
      this.currentMapTrack.setMap(null);
    }

    this.positionSubscription = this.geolocation
      .watchPosition()
      .subscribe(data => {
        console.log('new position: ', data);
        this.trackedRoute.push({
          lat: data.coords.latitude,
          lng: data.coords.longitude
        });
        this.redrawPath(this.trackedRoute);
      });
  }

  redrawPath(path) {
    console.log('paint: ', path);
    if (this.currentMapTrack) {
      this.currentMapTrack.setMap(null);
    }

    if (path.length > 1) {
      this.currentMapTrack = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#ff00ff',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });
      this.currentMapTrack.setMap(this.map);
    }
  }

  stopTracking() {
    this.isTracking = false;
    this.positionSubscription.unsubscribe();
  }


  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

}