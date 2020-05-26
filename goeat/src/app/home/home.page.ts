import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Usuario } from '../registro/usuario.model';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userEmail: string;
  map: any;
  usuario: Usuario = new Usuario();
  public isError = false;
  public isLogged = false;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  infoWindows: any = [];
  locationWatchStarted:boolean;
  locationSubscription:any;

  markers: any = [
    {
      title: "El Pimiento Verde",
      latitude: "40.424036",
      longitude: "-3.681425"
    }
  ];

  constructor(
    private navCtrl: NavController, 
    private authService: AuthService, 
    private geolocation: Geolocation) { }

  ionViewDidEnter() {
    this.showMap();
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
      // this.addInfoWindowToMarker(mapMarker);
      
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
      '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
      '<p> Latitude: ' + marker.latitude + '</p>' +
      '<p> Longitude: ' + marker.longitude + '</p>' +
      '</div>';

    let infoWindow = new google.maps.infoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for (let window of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(40.4165001, -3.7025599);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: false
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
    this.setCurrentLocation();

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
  usuarioFirebase(){
  }


  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.add_my_marker(position.coords.latitude, position.coords.longitude);
        console.log(position.coords.latitude, position.coords.longitude);
      });
    }

  }

  add_my_marker(lat, long) {
    
      let position = new google.maps.LatLng(lat, long);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: 'my position',
        latitude: lat,
        longitude: long
      });

      mapMarker.setMap(this.map);
      
      
    }
  
}