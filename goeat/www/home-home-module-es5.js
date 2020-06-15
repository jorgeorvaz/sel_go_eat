function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <img id=\"logo\" src=\".././../assets/logo.png\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"9\" size-md>\r\n        <ion-searchbar placeholder=\"Buscar restaurante...\" (ionChange)=\"findPlace($event)\" [debounce]=\"500\">\r\n        </ion-searchbar>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\" size-md>\r\n        <ion-button (click)=\"startTracking()\" color=\"success\" *ngIf=\"!isTracking\">\r\n          <ion-icon name=\"locate\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button (click)=\"stopTracking()\" color=\"warning\" *ngIf=\"isTracking\">\r\n          <ion-icon name=\"locate\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <div #map id=\"map\"></div>\r\n  <hr>\r\n  <ion-button expand=\"block\" (click)=\"toggleMarker()\">¿Dónde estas?</ion-button>\r\n  <hr>\r\n\r\n  <ion-segment>\r\n    <ion-segment-button value=\"bar\" (click)=\"showNearby('bar')\">\r\n      <ion-icon name=\"beer\"></ion-icon>Bares\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"cafeteria\" (click)=\"showNearby('cafe')\">\r\n      <ion-icon name=\"cafe\"></ion-icon>Cafeterias\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"restaurante\" (click)=\"showNearby('restaurant')\">\r\n      <ion-icon name=\"restaurant\"></ion-icon>Restaurantes\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n\r\n\r\n  <ion-list *ngFor=\"let place of locales_places; let i = index\">\r\n    <ion-item *ngIf=\"i < 3\">\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>{{place.name}}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n           Valoracion: {{place.rating}}/5 - \r\n           Ocupacion: {{place.ocupacion}}\r\n           <ion-button expand=\"block\" (click)=\"insertar_este_lugar(place)\" *ngIf = \"mostrar\">¿Estás aquí?</ion-button>\r\n           \r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-button expand=\"block\" color = \"danger\" (click)=\"salirLocal(restaurant)\" *ngIf = \"!mostrar\">No estoy</ion-button>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJhY3RpY2FzXFxhcGxpY2FjaW9uX2ZpbmFsXFxzZWxfZ29fZWF0XFxnb2VhdC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcblxyXG4iLCIjbWFwIHtcbiAgaGVpZ2h0OiA1MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _registro_usuario_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../registro/usuario.model */
    "./src/app/registro/usuario.model.ts");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _restaurante_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./restaurante.model */
    "./src/app/home/restaurante.model.ts");
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angularfire2/database */
    "./node_modules/angularfire2/database/index.js");
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_9__);

    var HomePage = /*#__PURE__*/function () {
      function HomePage(afDB, navCtrl, authService, geolocation, plt, alertCtrl, toastCtrl, iab) {
        _classCallCheck(this, HomePage);

        this.afDB = afDB;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.geolocation = geolocation;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.iab = iab;
        this.count_position = 0;
        this.place_markers = [];
        this.locales_places = [];
        this.usuario = new _registro_usuario_model__WEBPACK_IMPORTED_MODULE_4__["Usuario"]();
        this.restaurant = new _restaurante_model__WEBPACK_IMPORTED_MODULE_8__["Restaurante"]();
        this.isError = false;
        this.isLogged = false;
        this.mostrar = true;
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

      _createClass(HomePage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.loadMap();
          this.loadUserPosition();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.userDetails().subscribe(function (res) {
            if (res !== null) {
              _this.userEmail = res.email;
            } else {
              _this.navCtrl.navigateBack('');
            }
          }, function (err) {
            console.log('err', err);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this2 = this;

          this.authService.logoutUser().then(function (res) {
            console.log(res);

            _this2.navCtrl.navigateBack('');
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          var latLng = new google.maps.LatLng(40.0000000, -4.0000000);
          var styles = google.maps.MapTypeStyle = [{
            featureType: 'poi',
            stylers: [{
              visibility: 'off'
            }]
          }];
          var mapOptions = google.maps.MapOptions = {
            center: latLng,
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: styles,
            mapTypeControl: false
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        }
      }, {
        key: "loadUserPosition",
        value: function loadUserPosition() {
          var _this3 = this;

          this.plt.ready().then(function () {
            _this3.geolocation.getCurrentPosition().then(function (resp) {
              var lat = resp.coords.latitude;
              var lng = resp.coords.longitude;

              _this3.focusMap(lat, lng);

              _this3.addMarker(lat, lng, 'Tu posición');
            });
          });
        }
      }, {
        key: "focusMap",
        value: function focusMap(lat, lng) {
          var latLng = new google.maps.LatLng(lat, lng);
          this.map.setCenter(latLng);
          this.map.setZoom(15);
        }
      }, {
        key: "addMarker",
        value: function addMarker(lat, lng, info) {
          var _this4 = this;

          var latLng = new google.maps.LatLng(lat, lng);
          this.home = new google.maps.Marker({
            map: this.map,
            position: latLng,
            animation: google.maps.Animation.DROP,
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png'
          });
          var infoWindow = new google.maps.InfoWindow({
            content: info
          });
          this.home.addListener('click', function () {
            infoWindow.open(_this4.map, _this4.home);
          });
        }
      }, {
        key: "removeMarker",
        value: function removeMarker() {
          this.home.setMap(null);
        }
      }, {
        key: "remove_place_markers",
        value: function remove_place_markers() {
          if (this.place_markers.length > 0) {
            var _iterator = _createForOfIteratorHelper(this.place_markers),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var marker = _step.value;
                marker.setMap(null);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      }, {
        key: "toggleMarker",
        value: function toggleMarker() {
          if (this.home.getAnimation() !== null) {
            this.home.setAnimation(null);
          } else {
            this.home.setAnimation(google.maps.Animation.BOUNCE);
          }
        }
      }, {
        key: "setCurrentLocation",
        value: function setCurrentLocation() {
          var my_coords = [];

          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
              my_coords[0] = position.coords.latitude;
              my_coords[1] = position.coords.longitude;
            });
          }

          return my_coords;
        }
      }, {
        key: "showNearby",
        value: function showNearby(local) {
          var _this5 = this;

          if (this.place_markers) {
            this.remove_place_markers();
          }

          var request = google.maps.places.PlaceSearchRequest = {
            type: [local],
            radius: 400,
            location: this.home.getPosition()
          };
          var service = new google.maps.places.PlacesService(this.map);
          service.nearbySearch(request, function (results, status) {
            _this5.places = results;
            var request = google.maps.places.PlaceSearchRequest = {
              location: _this5.home.getPosition()
            }; // console.log(this.places);

            _this5.places = _this5.distance_order(request.location.lat(), request.location.lng(), _this5.places);

            _this5.lista_rest(); // console.log(this.places);


            if (status === google.maps.places.PlacesServiceStatus.OK) {
              var _iterator2 = _createForOfIteratorHelper(results),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var place = _step2.value;

                  _this5.addNearbyMarker(place);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          });
        }
      }, {
        key: "findPlace",
        value: function findPlace(e) {
          var _this6 = this;

          var request = {
            query: e.detail.value
          };
          var service = new google.maps.places.PlacesService(this.map);
          service.textSearch(request, function (results, status) {
            console.log('results: ', results);

            if (status === google.maps.places.PlacesServiceStatus.OK) {
              var _iterator3 = _createForOfIteratorHelper(results),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var place = _step3.value;

                  _this6.addNearbyMarker(place);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          });
        }
      }, {
        key: "addNearbyMarker",
        value: function addNearbyMarker() {
          var _this7 = this;

          var place = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : google.maps.places.PlaceResult;
          var icon = {
            url: place.icon,
            scaledSize: new google.maps.Size(25, 25),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0)
          };
          var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: place.geometry.location,
            icon: icon
          });
          this.place_markers.push(marker);
          var request = google.maps.places.PlaceSearchRequest = {
            location: this.home.getPosition()
          };
          var distancia = this.getDistanceFromLatLonInMeters(request.location.lat(), request.location.lng(), place.geometry.location.lat(), place.geometry.location.lng());
          marker.addListener('click', function () {
            var photo = '';

            if (place.photos.length > 0) {
              photo = place.photos[0].getUrl({
                maxWidth: 100,
                maxHeight: 100
              });
            }

            _this7.infowindow.setContent("<img src=\"".concat(photo, "\" style=\"width: 100%;max-height: 100px;object-fit: contain;\"/><br>\n      <b>").concat(place.name, "</b><br>").concat(place.vicinity, "</b><br>").concat(distancia, " metros"));

            _this7.infowindow.open(_this7.map, marker);
          });
        }
      }, {
        key: "startTracking",
        value: function startTracking() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this8 = this;

            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isTracking = true;
                    this.trackedRoute = [];

                    if (this.currentMapTrack) {
                      this.currentMapTrack.setMap(null);
                    }

                    _context.next = 5;
                    return this.toastCtrl.create({
                      duration: 3000,
                      message: 'Iniciando trackeo...'
                    });

                  case 5:
                    toast = _context.sent;
                    this.positionSubscription = this.geolocation.watchPosition().subscribe(function (data) {
                      console.log('new position: ', data);

                      _this8.trackedRoute.push({
                        lat: data.coords.latitude,
                        lng: data.coords.longitude
                      });

                      _this8.redrawPath(_this8.trackedRoute);
                    });
                    toast.present();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "redrawPath",
        value: function redrawPath(path) {
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
      }, {
        key: "stopTracking",
        value: function stopTracking() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isTracking = false;
                    this.positionSubscription.unsubscribe();
                    _context2.next = 4;
                    return this.toastCtrl.create({
                      duration: 3000,
                      message: 'Has dejado de tracker...'
                    });

                  case 4:
                    toast = _context2.sent;
                    toast.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getDistanceFromLatLonInMeters",
        value: function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
          var R = 6371; // Radius of the earth in km

          var dLat = this.deg2rad(lat2 - lat1); // deg2rad below

          var dLon = this.deg2rad(lon2 - lon1);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c; // Distance in km

          d = Math.round(d * 1000);
          return d;
        }
      }, {
        key: "deg2rad",
        value: function deg2rad(deg) {
          return deg * (Math.PI / 180);
        }
      }, {
        key: "insertar_este_lugar",
        value: function insertar_este_lugar(place) {
          this.restaurant = place;
          this.mostrar = false;
          var rest = new _restaurante_model__WEBPACK_IMPORTED_MODULE_8__["Restaurante"]();
          rest.id = place.id;
          rest.ocupacion += 1;
          this.authService.insertar_restaurante(rest);
        }
      }, {
        key: "salirLocal",
        value: function salirLocal(place) {
          this.mostrar = true;
          var rest = new _restaurante_model__WEBPACK_IMPORTED_MODULE_8__["Restaurante"]();
          rest.id = place.id;
          rest.ocupacion -= 1;
          this.authService.borrar_ocupacion(rest);
        }
      }, {
        key: "distance_order",
        value: function distance_order(my_lat, my_lng, lugares) {
          for (var i = 0; i < lugares.length - 1; i++) {
            for (var j = 0; j < lugares.length - 1 - i; j++) {
              if (this.getDistanceFromLatLonInMeters(my_lat, my_lng, lugares[j].geometry.location.lat(), lugares[j].geometry.location.lng()) > this.getDistanceFromLatLonInMeters(my_lat, my_lng, lugares[j + 1].geometry.location.lat(), lugares[j + 1].geometry.location.lng())) {
                var aux = lugares[j + 1];
                lugares[j + 1] = lugares[j];
                lugares[j] = aux;
              }
            }
          }

          return lugares;
        }
      }, {
        key: "lista_rest",
        value: function lista_rest() {
          var _this9 = this;

          this.locales_places = [];

          var _loop = function _loop(i) {
            var local = new _restaurante_model__WEBPACK_IMPORTED_MODULE_8__["Restaurante"]();
            local.id = _this9.places[i].id;
            local.name = _this9.places[i].name;
            local.valoracion = _this9.places[i].rating;

            _this9.afDB.database.ref("establecimientos/" + local.id).once('value').then(function (snapshot) {
              local.ocupacion = snapshot.val() && snapshot.val().ocupacion;
            });

            _this9.locales_places.push(local);
          };

          for (var i = 0; i < this.places.length; i++) {
            _loop(i);
          }

          console.log(this.locales_places);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: angularfire2_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], HomePage.prototype, "mapRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], HomePage.prototype, "mapElement", void 0);
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/home/restaurante.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/home/restaurante.model.ts ***!
    \*******************************************/

  /*! exports provided: Restaurante */

  /***/
  function srcAppHomeRestauranteModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Restaurante", function () {
      return Restaurante;
    });

    var Restaurante = function Restaurante() {
      _classCallCheck(this, Restaurante);

      this.ocupacion = 0;
    };

    ;
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map