(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <img id=\"logo\" src=\".././../assets/logo.png\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar placeholder=\"Buscar restaurante...\" (ionChange)=\"findPlace($event)\" [debounce]=\"500\"></ion-searchbar>\r\n\r\n  <div *ngIf=\"direction\">\r\n    <ion-card *ngFor=\"let route of direction.routes; let i = index;\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle>{{ route.legs[0].duration.text }}</ion-card-subtitle>\r\n        <ion-card-title>{{ route.legs[0].distance.text }}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-button (click)=\"pickRoute(i)\">Pick Route</ion-button>\r\n        <ion-button (click)=\"openNativeRoute(route)\">Show native Route</ion-button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div #map id=\"map\"></div>\r\n  <ion-button expand=\"block\" (click)=\"toggleMarker()\">¿Dónde estas?</ion-button>\r\n  <ion-button expand=\"block\" (click)=\"showNearby()\">Mostrar bares alrededor</ion-button>\r\n\r\n  <ion-button expand=\"block\" (click)=\"startTracking()\" color=\"success\" *ngIf=\"!isTracking\">\r\n    <ion-icon name=\"locate\" slot=\"icon-left\"></ion-icon>Localizame\r\n  </ion-button>\r\n\r\n  <ion-button expand=\"block\" (click)=\"stopTracking()\" color=\"warning\" *ngIf=\"isTracking\">\r\n    <ion-icon name=\"hand\" slot=\"icon-left\"></ion-icon>Dejar de localizarme\r\n  </ion-button>\r\n\r\n  <div style=\"width:100%; height:50%\">\r\n    <ion-list *ngFor=\"let place of places; let i = index\">\r\n    <ion-item *ngIf=\"i < 3\">\r\n      <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>{{place.name}}</ion-card-title>\r\n          </ion-card-header>\r\n        <ion-card-content>\r\n           Valoracion: {{place.rating}}/5 - \r\n           Ocupacion: Desconocida\r\n           <ion-button expand=\"block\" (click)=\"insertar_este_lugar(place)\">¿Estás aquí?</ion-button>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJhY3RpY2FzXFxhcGxpY2FjaW9uX2ZpbmFsXFxzZWxfZ29fZWF0XFxnb2VhdC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcblxyXG4iLCIjbWFwIHtcbiAgaGVpZ2h0OiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _registro_usuario_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registro/usuario.model */ "./src/app/registro/usuario.model.ts");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _restaurante_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./restaurante.model */ "./src/app/home/restaurante.model.ts");











let HomePage = class HomePage {
    constructor(navCtrl, authService, geolocation, plt, iab) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.geolocation = geolocation;
        this.plt = plt;
        this.iab = iab;
        this.count_position = 0;
        this.usuario = new _registro_usuario_model__WEBPACK_IMPORTED_MODULE_4__["Usuario"]();
        this.isError = false;
        this.isLogged = false;
        this.map = google.maps.Map;
        this.home = google.maps.Marker;
        this.infowindow = new google.maps.InfoWindow();
        this.isTracking = false;
        this.trackedRoute = [];
        this.currentMapTrack = null;
        this.start = '';
        this.end = '';
        this.direction = google.maps.DirectionsResult;
    }
    ionViewDidEnter() {
        this.loadMap();
        this.loadUserPosition();
    }
    ngOnInit() {
        this.authService.userDetails().subscribe(res => {
            if (res !== null) {
                this.userEmail = res.email;
            }
            else {
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
        });
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
                this.addMarker(lat, lng, 'Tu posición');
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
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png'
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
        }
        else {
            this.home.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    setCurrentLocation() {
        let my_coords = [];
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
            type: ['cafe'],
            radius: 400,
            location: this.home.getPosition()
        };
        let service = new google.maps.places.PlacesService(this.map);
        service.nearbySearch(request, (results, status) => {
            this.places = results;
            let request = google.maps.places.PlaceSearchRequest = {
                location: this.home.getPosition()
            };
            // console.log(this.places);
            this.places = this.distance_order(request.location.lat(), request.location.lng(), this.places);
            // console.log(this.places);
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let place of results) {
                    this.addNearbyMarker(place);
                }
            }
        });
    }
    findPlace(e) {
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
        let distancia = this.getDistanceFromLatLonInMeters(request.location.lat(), request.location.lng(), place.geometry.location.lat(), place.geometry.location.lng());
        marker.addListener('click', () => {
            let photo = '';
            if (place.photos.length > 0) {
                photo = place.photos[0].getUrl({ maxWidth: 100, maxHeight: 100 });
            }
            this.infowindow
                .setContent(`<img src="${photo}" style="width: 100%;max-height: 100px;object-fit: contain;"/><br>
      <b>${place.name}</b><br>${place.vicinity}</b><br>${distancia} metros`);
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
    getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        d = Math.round(d * 1000);
        return d;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    insertar_este_lugar(place) {
        let rest = new _restaurante_model__WEBPACK_IMPORTED_MODULE_8__["Restaurante"]();
        rest.id = place.id;
        rest.ocupacion += 1;
        this.authService.insertar_restaurante(rest);
    }
    distance_order(my_lat, my_lng, lugares) {
        for (let i = 0; i < lugares.length - 1; i++) {
            for (let j = 0; j < lugares.length - 1 - i; j++) {
                if (this.getDistanceFromLatLonInMeters(my_lat, my_lng, lugares[j].geometry.location.lat(), lugares[j].geometry.location.lng())
                    > this.getDistanceFromLatLonInMeters(my_lat, my_lng, lugares[j + 1].geometry.location.lat(), lugares[j + 1].geometry.location.lng())) {
                    let aux = lugares[j + 1];
                    lugares[j + 1] = lugares[j];
                    lugares[j] = aux;
                }
            }
        }
        console.log(lugares);
        return lugares;
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HomePage.prototype, "mapRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HomePage.prototype, "mapElement", void 0);
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]])
], HomePage);



/***/ }),

/***/ "./src/app/home/restaurante.model.ts":
/*!*******************************************!*\
  !*** ./src/app/home/restaurante.model.ts ***!
  \*******************************************/
/*! exports provided: Restaurante */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Restaurante", function() { return Restaurante; });
class Restaurante {
    constructor() {
        this.ocupacion = 0;
    }
}
;


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map