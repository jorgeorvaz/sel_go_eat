(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacto-contacto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacto/contacto.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacto/contacto.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <img id=\"logo\" src=\".././../assets/logo.png\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n \r\n    <ion-item class=\"inputs\" lines=\"none\" >\r\n      <ion-label position=\"stacked\">Asunto</ion-label>\r\n      <ion-input maxlength=\"50\" [(ngModel)] = \"asunto\" type=\"asunto\" required></ion-input>\r\n    </ion-item>\r\n    \r\n    <ion-item class=\"inputs\" lines=\"none\">\r\n      <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)] = \"mensaje\" placeholder=\"Escribe tu mensaje aqui...\"></ion-textarea>\r\n    </ion-item>\r\n    \r\n    <ion-button class=\"ion-padding-horizontal ion-margin-vertical\" expand=\"block\" (click)= \"crear_mensaje()\">Enviar mensaje</ion-button>\r\n      \r\n\r\n\r\n  </ion-content>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/contacto/contacto-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contacto/contacto-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPageRoutingModule", function() { return ContactoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contacto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacto.page */ "./src/app/contacto/contacto.page.ts");




const routes = [
    {
        path: '',
        component: _contacto_page__WEBPACK_IMPORTED_MODULE_3__["ContactoPage"]
    }
];
let ContactoPageRoutingModule = class ContactoPageRoutingModule {
};
ContactoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactoPageRoutingModule);



/***/ }),

/***/ "./src/app/contacto/contacto.model.ts":
/*!********************************************!*\
  !*** ./src/app/contacto/contacto.model.ts ***!
  \********************************************/
/*! exports provided: Mensaje */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mensaje", function() { return Mensaje; });
class Mensaje {
}
;


/***/ }),

/***/ "./src/app/contacto/contacto.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacto/contacto.module.ts ***!
  \*********************************************/
/*! exports provided: ContactoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPageModule", function() { return ContactoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contacto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacto-routing.module */ "./src/app/contacto/contacto-routing.module.ts");
/* harmony import */ var _contacto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacto.page */ "./src/app/contacto/contacto.page.ts");







let ContactoPageModule = class ContactoPageModule {
};
ContactoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contacto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactoPageRoutingModule"]
        ],
        declarations: [_contacto_page__WEBPACK_IMPORTED_MODULE_6__["ContactoPage"]]
    })
], ContactoPageModule);



/***/ }),

/***/ "./src/app/contacto/contacto.page.scss":
/*!*********************************************!*\
  !*** ./src/app/contacto/contacto.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/contacto/contacto.page.ts":
/*!*******************************************!*\
  !*** ./src/app/contacto/contacto.page.ts ***!
  \*******************************************/
/*! exports provided: ContactoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPage", function() { return ContactoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _registro_usuario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registro/usuario.model */ "./src/app/registro/usuario.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contacto_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacto.model */ "./src/app/contacto/contacto.model.ts");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");










let ContactoPage = class ContactoPage {
    constructor(authService, emailComposer, formBuilder, navCtrl, toastController) {
        this.authService = authService;
        this.emailComposer = emailComposer;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.errorMessage = '';
        this.contacto = new _contacto_model__WEBPACK_IMPORTED_MODULE_7__["Mensaje"]();
        this.isSubmitted = false;
        this.usuario = new _registro_usuario_model__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.email = 'proyectogoeat@gmail.com';
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            mensaje: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.authService.userDetails().subscribe(res => {
            if (res !== null) {
                this.userEmail = res.email;
                console.log(this.userEmail);
            }
            else {
                this.navCtrl.navigateBack('');
            }
        }, err => {
            console.log('err', err);
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    mensajeToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Tu mensaje ha sido enviado con éxito',
                duration: 2000
            });
            toast.present();
        });
    }
    crear_mensaje() {
        //this.authService.insertar_mensaje(this.contacto);
        let correo = {
            to: this.email,
            cc: [],
            bcc: [],
            attachments: [],
            subject: this.asunto,
            body: this.mensaje,
            isHtml: false,
            app: "GoEatNow"
        };
        this.emailComposer.open(correo);
        console.log(correo);
    }
};
ContactoPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__["EmailComposer"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
ContactoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contacto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacto/contacto.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contacto.page.scss */ "./src/app/contacto/contacto.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__["EmailComposer"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
], ContactoPage);



/***/ })

}]);
//# sourceMappingURL=contacto-contacto-module-es2015.js.map