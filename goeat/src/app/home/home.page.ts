import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Usuario } from '../registro/usuario.model';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
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

  addMarkersToMap(markers) {
    for (let marker of markers) {
      console.log(marker);
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      

    }
  }

  addInfoWindowToMarker(marker) {
    var infowindow = new google.maps.InfoWindow({
      content:
        '<h2>'+marker.name +'</h2>'+
        '<h5>ID: '+marker.placeId+'</h5>'+
        '<h5>VALORACIÓN: '+marker.rating+'</h5>'
    });
    
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(this.map,marker);
      
    });
  }

  closeAllInfoWindows() {
    for (let window of this.infoWindows) {
      window.close();
    }
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

    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {

      this.currentPos = pos;
      console.log(pos);
      this.addMap(pos.coords.latitude, pos.coords.longitude);

    }, (err: PositionError) => {
      console.log("error : " + err.message);
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
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
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
      icon:image
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
      radius: 8047,
      types: ["restaurant"]
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
  createMarker(place) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location,
      placeId: place.place_id,
      rating: place.rating,
      opening_hours: place.opening_hours,
      name: place.name
    });
    this.addInfoWindowToMarker(marker);
  }

}