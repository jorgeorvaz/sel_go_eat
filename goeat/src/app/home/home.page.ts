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
  map: any;
  places: Array<any>;
  usuario: Usuario = new Usuario();
  public isError = false;
  public isLogged = false;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  @ViewChild('map') mapElement: ElementRef;

  infoWindows: any = [];
  locationWatchStarted: boolean;
  locationSubscription: any;


  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private geolocation: Geolocation) { }

  ionViewDidEnter() {
    this.getUserPosition();
  }



  ngOnInit() {

    this.authService.userDetails().subscribe(res => {
      if (res !== null) {
        this.userEmail = res.email;
        console.log(this.userEmail);
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

  getUserPosition() {
    this.options = {
      enableHighAccuracy: true
    };

    let watch = this.geolocation.watchPosition(this.options);
    watch.subscribe((pos: Geoposition) => {
      var updatedLatitude = pos.coords.latitude;
      var updatedLongitude = pos.coords.longitude;
      if(this.count_position++ == 0 || (updatedLatitude != this.currentPos.coords.latitude && updatedLongitude != this.currentPos.coords.longitude)){
        this.currentPos = pos;
        console.log(pos);
        this.addMap(pos.coords.latitude, pos.coords.longitude);
      }
    });
  }

  addMap(lat, long) {

    let latLng = new google.maps.LatLng(lat, long);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.getRestaurants(latLng).then((results: Array<any>) => {
      this.places = results;
      console.log(this.places);
      for (let i = 0; i < this.places.length; i++) {
        this.createMarker(this.places[i]);
      }
    }, (status) => console.log(status));

    this.addMarker();

  }
  addMarker() {
    let image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter(),
      icon: image
    });

    let content = "<p>This is your current position !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  getRestaurants(latLng) {
    var service = new google.maps.places.PlacesService(this.map);

    let request = {
      location: latLng,
      radius: 400,
      types: ["cafe"]
    };
    return new Promise((resolve, reject) => {
      service.nearbySearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(status);
        }

      });
      
    });
  }
  addInfoWindowToMarker(marker) {
    var infowindow = new google.maps.InfoWindow({
      content:

        '<h2>' + marker.name + '</h2>' +
        '<h5>' + marker.vicinity + '</h5>' +
        '<h5>VALORACIÓN: ' + marker.rating + '⭐</h5>' +
        '<h5>TLF: ' + JSON.stringify(marker.phone) + '</h5>' +
        '<h5>URL: ' + marker.url + '</h5>' + 
        '<h5>Horario: ' + marker.hours + '</h5>'


    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(this.map, marker);

    });
  }

  createMarker(place) {
    
    var service1 = new google.maps.places.PlacesService(this.map);
    service1.getDetails({placeId: place.place_id}, function (place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(place);
        return place;
      } else {
        return status;
      }
    

    });
    
    
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location,
      placeId: place.place_id,
      rating: place.rating,
      name: place.name,
      vicinity: place.vicinity,
      phone: place.formatted_phone_number,

    });

    this.addInfoWindowToMarker(marker);
    
    
  }

}