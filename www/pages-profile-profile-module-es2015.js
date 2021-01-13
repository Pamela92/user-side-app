(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div class=\"wrapper\">\n    <div class=\"top\">\n      <img style=\"width: 100%; height: 100%;\" src=\"assets/profilebg.jpg\" >\n\n      <ion-avatar style=\"position: absolute; top: 20%; width: 30%; height: 40%;\">\n        <!-- <ion-icon style=\"position: absolute;top: 25%;font-size: 30px;color: white; font-weight:bold;left: 90%;\"\n          name=\"create-outline\"></ion-icon> -->\n        <img src=\"assets/bg.jpg\">\n      </ion-avatar>\n      <p style=\"position:absolute; font-weight:bold;color:white; bottom:20%\">Company name</p>\n      <p style=\"position:absolute;color:white; bottom:15%; font-size: 12px;\">Company address</p>\n\n    </div>\n<div style=\"width: 100%;height: 10%; position: absolute;bottom: 57%;display: flex;justify-content: center;\"> \n<ion-button [routerLink]=\"'/profile-add'\" style=\"height: 25px;--background:whitesmoke; font-size: 11px;color: black;opacity: 80%;\"> Edit</ion-button>\n</div>\n    <div class=\"bottom\">\n      <ion-card\n        style=\"width: 90%; height: 90%; display: flex;justify-content: left;align-items: initial;flex-direction: column;\">\n        <p style=\"font-weight: bold; font-size:14px;position:absolute;left:3%;\">Description</p>\n        <p style=\"position: absolute;left: 3%; top: 16%;\">Sawubona</p>\n        </ion-card>\n    </div>\n    <div class=\"segments\">\n\n      <ion-segment [(ngModel)]=\"selectedtabs \" style=\"position: absolute; top: 0px;\">\n        <ion-segment-button value=\"Spaces\">\n          <ion-label>Spaces</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Reviews\">\n          <ion-label>Reviews</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n\n      <div style=\"width: 100%; height: 85%; display: flex;justify-content: center;align-self: center;\"\n        *ngIf=\"selectedtabs == 'Spaces'\">\n        <ion-card style=\"width: 90%;height: 60%;background-color: white;position: absolute;bottom: 5%;\">\n         spaces\n        </ion-card>\n      </div>\n      <div style=\"width: 100%; height: 85%; display: flex;justify-content: center;align-self: center;\"\n        *ngIf=\"selectedtabs == 'Reviews'\">\n\n        <ion-card  style=\"width: 90%;height: 70%;background-color: white;position: absolute;bottom: 5%;\">\n          <ion-avatar style=\"position: absolute; top: 10%;left: 5%;\">\n            <img style=\"width: 50px; height: 50px;\" src=\"assets/bg.jpg\">\n          </ion-avatar>\n          <p style=\"position: absolute;left: 23%;top: 5%; font-size: 11px;\">Reviewer</p>\n          <p style=\"position: absolute;top: 5%;right: 5%;font-size: 11px;\">10-23-12</p>\n        <p style=\"position: absolute;top: 30%;left: 20%;\">This it the first review card</p>\n\n\n        </ion-card>\n      </div>\n\n\n\n\n    </div>\n\n\n  </div>\n</ion-content>\n  <!-- <ion-card  *ngFor=\"let x of array; let i = index\">\n    <div  >\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"4\">\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-avatar style=\"height:100px;width:100px;\">\n        <img  src=\"assets/profile.jpg\">\n      </ion-avatar>\n    </ion-col>\n    <ion-col size=\"4\">\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n     \n\n\n     <ion-card-header>\n\n      <ion-grid>\n        <ion-row>\n          {{x.company_name}}\n        </ion-row>\n        <ion-row>\n          {{x.aboutus}}\n        </ion-row>\n        <ion-row>\n          {{x.company_address}}\n        </ion-row>\n        <ion-row>\n          <div *ngFor=\"let y of x.outside_features;\">\n            <ion-card-subtitle *ngIf=\"y==='Ben 10'\"  >\n              <img style=\"height:15%;width:15%;\" src=\"./assets/outside/228467827.ico\" />\n            </ion-card-subtitle>\n          </div>\n        </ion-row>\n        <ion-row>\n          {{x.company_emaile}}\n        </ion-row>\n        <ion-row>\n          {{x.company_tel}}\n        </ion-row>\n        <ion-row>\n          {{x.company_website}}\n        </ion-row>\n        <ion-row>\n          {{x.social_media}}\n        </ion-row>\n      </ion-grid> -->\n\n\n  <!-- \n       <ion-card-title>{{x.company_name}}</ion-card-title>\n       <ion-card-title>{{x.aboutus}}</ion-card-title>\n       <ion-card-subtitle>{{x.company_address}}</ion-card-subtitle>\n<div *ngFor=\"let y of x.outside_features;\">\n  <ion-card-subtitle *ngIf=\"y==='Ben 10'\"  >\n    <img style=\"height:15%;width:15%;\" src=\"./assets/outside/228467827.ico\" />\n  </ion-card-subtitle>\n</div>\n       <ion-card-subtitle>{{x.company_emaile}}</ion-card-subtitle>\n       <ion-card-subtitle >{{x.company_tel}}</ion-card-subtitle>\n       <ion-card-subtitle>{{x.company_website}}</ion-card-subtitle>\n       <ion-card-subtitle>{{x.social_media}}</ion-card-subtitle> -->\n  <!-- </ion-card-header>\n   </div>\n </ion-card>\n\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n          <ion-col>\n             <ion-avatar >\n                <img src=\"assets/profile.jpg\">\n          </ion-avatar>\n        </ion-col>\n        <ion-col>\n            <ion-grid>\n              <ion-row>\n                Building 4\n              </ion-row>\n              <ion-row>\n                Kibler park\n              </ion-row>\n              <ion-row>\n                Contains 18 offices...\n              </ion-row>\n            </ion-grid>\n        </ion-col>   \n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <a  style=\"color: black;\" [routerLink]=\"'/add-profile-modal'\">update profile</a> -->");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.top {\n  width: 100%;\n  height: 40%;\n  position: absolute;\n  top: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n}\n\n.bottom {\n  background-color: whitesmoke;\n  position: absolute;\n  width: 100%;\n  height: 20%;\n  top: 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.segments {\n  position: absolute;\n  width: 100%;\n  height: 40%;\n  bottom: 0%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF0Q0o7O0FBMENBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXhDSjs7QUE0Q0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBekNKOztBQTRDQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTFDSjs7QUE0Q0E7RUFFSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBM0NKOztBQStDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBNUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLy8gLndyYXBwZXJ7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuLy8gfVxyXG4vLyAucHJvZmlsZXZpZXd7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDAlO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDkwJTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE2cHg7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4vLyB9XHJcblxyXG4vLyAuYWRkcHJvZmlsZXtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAyMCU7XHJcbi8vICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMxNkQ2RTM7XHJcbi8vICAgICBvcGFjaXR5OiA2MCU7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBib3R0b206IDBweDtcclxuXHJcbi8vIH1cclxuXHJcbi53cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuLnRvcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uaW1ne1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgXHJcbn1cclxuLmJvdHRvbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zZWdtZW50c3tcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfilePage = class ProfilePage {
    constructor() { }
    ngOnInit() {
    }
};
ProfilePage.ctorParameters = () => [];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map