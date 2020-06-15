function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPerfilPerfilPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-page class=\"ion-page\" id=\"main-content\"></ion-page>\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n    <img id=\"logo\" src=\".././../assets/logo.png\">\r\n  </ion-toolbar>\r\n  </ion-header>\r\n<ion-content padding>\r\n  <ion-card>\r\n    <ion-profile-pic>\r\n      <img id=\"imagen_perfil\" src=\"./assets/imgs/perfil.png\">\r\n    </ion-profile-pic>\r\n\r\n    <ion-parrafo id=\"user\">\r\n      <p>{{userEmail}}</p>\r\n    </ion-parrafo>\r\n  </ion-card>\r\n\r\n  <ion-item lines = \"none\">\r\n    <ion-input type=\"email\" placeholder=\"Nuevo email\" [(ngModel)]=\"correo\"></ion-input>\r\n  </ion-item>\r\n    \r\n  \r\n  <ion-button class=\"ion-padding-horizontal\" expand=\"block\" (click)=\"perfil()\">Cambiar email</ion-button>\r\n    \r\n\r\n  <ion-item lines = \"none\">\r\n    <ion-input type=\"password\" placeholder=\"Nueva contraseña\" [(ngModel)]=\"contrasena\"></ion-input>\r\n  </ion-item>\r\n    \r\n  \r\n  <ion-button class=\"ion-padding-horizontal\" expand=\"block\" (click)=\"password()\">Cambiar contraseña</ion-button>\r\n   \r\n</ion-content>\r\n<ion-footer>\r\n  <div class=\"footer\">\r\n    <ion-button color=\"danger\" expand=\"block\" (click)=\"logout()\">Cerrar sesión</ion-button>\r\n  </div>\r\n</ion-footer>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/perfil/perfil-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/perfil/perfil-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: PerfilPageRoutingModule */

  /***/
  function srcAppPerfilPerfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function () {
      return PerfilPageRoutingModule;
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


    var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./perfil.page */
    "./src/app/perfil/perfil.page.ts");

    var routes = [{
      path: '',
      component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }];

    var PerfilPageRoutingModule = function PerfilPageRoutingModule() {
      _classCallCheck(this, PerfilPageRoutingModule);
    };

    PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PerfilPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/perfil/perfil.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/perfil/perfil.module.ts ***!
    \*****************************************/

  /*! exports provided: PerfilPageModule */

  /***/
  function srcAppPerfilPerfilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function () {
      return PerfilPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./perfil-routing.module */
    "./src/app/perfil/perfil-routing.module.ts");
    /* harmony import */


    var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./perfil.page */
    "./src/app/perfil/perfil.page.ts");

    var PerfilPageModule = function PerfilPageModule() {
      _classCallCheck(this, PerfilPageModule);
    };

    PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]],
      declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })], PerfilPageModule);
    /***/
  },

  /***/
  "./src/app/perfil/perfil.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/perfil/perfil.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPerfilPerfilPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#imagen_perfil {\n  display: block;\n  margin: auto;\n  width: 50%;\n}\n\n#user {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL0Q6XFxQcmFjdGljYXNcXGFwbGljYWNpb25fZmluYWxcXHNlbF9nb19lYXRcXGdvZWF0L3NyY1xcYXBwXFxwZXJmaWxcXHBlcmZpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1hZ2VuX3BlcmZpbHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiN1c2Vye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4iLCIjaW1hZ2VuX3BlcmZpbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbiN1c2VyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/perfil/perfil.page.ts":
  /*!***************************************!*\
    !*** ./src/app/perfil/perfil.page.ts ***!
    \***************************************/

  /*! exports provided: PerfilPage */

  /***/
  function srcAppPerfilPerfilPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPage", function () {
      return PerfilPage;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");

    var PerfilPage = /*#__PURE__*/function () {
      function PerfilPage(navCtrl, authService, toastCtrl) {
        _classCallCheck(this, PerfilPage);

        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
      }

      _createClass(PerfilPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.userDetails().subscribe(function (res) {
            console.log('res', res.email);

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
        key: "perfil",
        value: function perfil() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var user;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log(this.correo);
                    user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
                    firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().useDeviceLanguage();
                    user.updateEmail(this.correo).then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var toast;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.toastCtrl.create({
                                  duration: 3000,
                                  message: 'Su correo se cambio con éxito'
                                });

                              case 2:
                                toast = _context.sent;
                                toast.present();
                                user.sendEmailVerification().then(function () {
                                  alert('verifica tu email');
                                })["catch"](function (error) {
                                  console.log(error);
                                });

                              case 5:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    })["catch"](function (error) {
                      alert(error.message);
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "password",
        value: function password() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var user;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log(this.contrasena);
                    user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
                    user.updatePassword(this.contrasena).then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var toast;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return this.toastCtrl.create({
                                  duration: 3000,
                                  message: 'Su contraseña se ha cambiado'
                                });

                              case 2:
                                toast = _context3.sent;
                                toast.present();

                              case 4:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    })["catch"](function (error) {
                      console.log(error);
                    });

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return PerfilPage;
    }();

    PerfilPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-perfil',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./perfil.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./perfil.page.scss */
      "./src/app/perfil/perfil.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], PerfilPage);
    /***/
  }
}]);
//# sourceMappingURL=perfil-perfil-module-es5.js.map