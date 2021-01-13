(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-add-profile-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-add/profile-add.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-add/profile-add.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div class=\"holder\">\n    \n    <!-- <ion-icon style=\"position: absolute;left:3%;font-size: 30px;top: 15%;color: #303d3d;\" name=\"images-outline\"></ion-icon> -->\n    <div class=\"top\">\n      <ion-icon style=\"font-size: 30px; position: absolute; left: 5%;top: 10%; color: whitesmoke;\" name=\"arrow-back-outline\"></ion-icon>\n      <img style=\"width:100%;height:100%;opacity: 30%;\" src=\"assets/bgg.jpg\" >\n    </div>\n    <!-- <ion-button style=\"position: absolute;top: 15%;right: 5%;height: 20px;--background:rgb(224, 18, 53);\"> Submit</ion-button> -->\n  <!-- <div style=\"position: absolute;width: 6.5%;height: 4%; border-radius: 50%; background-color:white;top: 15%;left: 1%; display: flex;justify-content: center;align-items: center;\">\n    <ion-icon style=\"font-size: 20px;color: white;background-color: #16D6E3; border-radius: 50%;\" name=\"add-circle-outline\"></ion-icon>\n  </div> -->\n  <!-- <ion-icon style=\"font-size: 50px; position: absolute;top: 20%;right: 5%;color:red;\" name=\"add-circle-outline\"></ion-icon> -->\n    <div class=\"bottom\">\n      <p style=\"font-size:22px;font-weight: bolder;position: absolute;top: 0%;left: 5%;color: white;\">Profile</p>\n\n      <form  style=\"width: 100%;position: absolute;top: 15%;height: 80%;\">\n        <ion-item><ion-input placeholder=\"Company name..\"></ion-input></ion-item>\n  <ion-item><ion-input placeholder=\"Address\"></ion-input></ion-item>\n  <ion-item><ion-input placeholder=\"Telephone\"></ion-input></ion-item>\n  <ion-item><ion-input placeholder=\"Website\"></ion-input></ion-item>\n  <ion-textarea placeholder=\"Description\" style=\"border-style: solid;height: 15%;border-width: 1px;border-color: rgb(196, 190, 190);border-top: 0px;margin: 0px;\"></ion-textarea>\n  <input style=\"font-size: 11px; color: gray;\" type=\"file\">\n<p style=\"font-size:14px; font-weight: bolder;color: gray;\">Select enemities</p>\n  <ion-grid>\n    <ion-row style=\"color: grey;margin: 5px;\">\n      <ion-col>\n        <div style=\"font-size: 12px;\">wifi <br> <input type=\"checkbox\">\n        </div>\n      </ion-col>\n      <ion-col>\n        <div style=\"font-size: 12px;\">Phone <br> <input type=\"checkbox\"></div>\n      </ion-col>\n      <ion-col>\n        <div style=\"font-size: 12px;\">Printer <br> <input type=\"checkbox\"></div>\n      </ion-col>\n      <ion-col>\n        <div style=\"font-size: 12px;\">Projector <br> <input type=\"checkbox\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n\n  <ion-button style=\"--background:#16D6E3 ; width: 60%;height: 30px;position: absolute;left: 20%;\"> Submit</ion-button>\n      </form>\n      \n    </div>\n  </div>\n  </ion-content>\n  <ion-footer style=\"position: absolute; height: 50px;bottom: 0px;background-color:  #303d3d; display: flex;justify-content: center;align-items: center;\" >\n    \n    <ion-icon [routerLink]=\"'/profile'\" style=\"font-size: 30px;position: absolute;right: 7%;color: grey;\" name=\"person-outline\"></ion-icon>\n    <ion-icon [routerLink]=\"'/favourites'\" style=\"font-size: 30px;position: absolute;right: 45%;color: grey;\" name=\"heart-outline\"></ion-icon>\n    <ion-icon [routerLink]=\"'/owner-landing'\" style=\"font-size: 30px;position: absolute;left: 7%;color: grey;\" name=\"home-outline\"></ion-icon>\n    <!-- <ion-icon [routerLink]=\"'/upload-space'\" style=\"position: absolute;left:33%;font-size: 30px;color: grey;\" name=\"add-circle-outline\"></ion-icon> -->\n  </ion-footer>");

/***/ }),

/***/ "./src/app/pages/profile-add/profile-add-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/profile-add/profile-add-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAddPageRoutingModule", function() { return ProfileAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-add.page */ "./src/app/pages/profile-add/profile-add.page.ts");




const routes = [
    {
        path: '',
        component: _profile_add_page__WEBPACK_IMPORTED_MODULE_3__["ProfileAddPage"]
    }
];
let ProfileAddPageRoutingModule = class ProfileAddPageRoutingModule {
};
ProfileAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileAddPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile-add/profile-add.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile-add/profile-add.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfileAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAddPageModule", function() { return ProfileAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-add-routing.module */ "./src/app/pages/profile-add/profile-add-routing.module.ts");
/* harmony import */ var _profile_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-add.page */ "./src/app/pages/profile-add/profile-add.page.ts");







let ProfileAddPageModule = class ProfileAddPageModule {
};
ProfileAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileAddPageRoutingModule"]
        ],
        declarations: [_profile_add_page__WEBPACK_IMPORTED_MODULE_6__["ProfileAddPage"]]
    })
], ProfileAddPageModule);



/***/ }),

/***/ "./src/app/pages/profile-add/profile-add.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile-add/profile-add.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".holder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.top {\n  width: 100%;\n  height: 50%;\n  position: absolute;\n  top: 0px;\n  background-color: #2D98E6;\n  opacity: 80%;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.bottom {\n  width: 90%;\n  height: 90%;\n  position: absolute;\n  bottom: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-select {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1hZGQvcHJvZmlsZS1hZGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNDLCtCQUFBO0VBQ0EsZ0NBQUE7QUFDTDs7QUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtYWRkL3Byb2ZpbGUtYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob2xkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRvcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogZG90dGVkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyRDk4RTY7XHJcbiAgICBvcGFjaXR5OiA4MCU7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG4uYm90dG9te1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogZG90dGVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/profile-add/profile-add.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/profile-add/profile-add.page.ts ***!
  \*******************************************************/
/*! exports provided: ProfileAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAddPage", function() { return ProfileAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfileAddPage = class ProfileAddPage {
    constructor() { }
    ngOnInit() {
    }
};
ProfileAddPage.ctorParameters = () => [];
ProfileAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-add.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-add/profile-add.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-add.page.scss */ "./src/app/pages/profile-add/profile-add.page.scss")).default]
    })
], ProfileAddPage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-add-profile-add-module-es2015.js.map