(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-landing-owner-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner-landing/owner-landing.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner-landing/owner-landing.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content >\n  <div class=\"bgImg\">  <img style=\"width: 100%; height: 50%;\" src=\"assets/bgg.jpg\"></div>\n  <div class=\"wrapper\">\n  <div class=\"textBorder\">\n  <!-- <p style=\"font-weight: bold;font-size: 30px;position: absolute;left: 10%;\">Synergic</p>  -->\n  \n  </div>\n  <div class=\"stats\">\n  \n    <p style=\"font-size: 10px; color: rgb(150, 141, 141);position: absolute;right: 3%;\">25-12-12</p>\n    <!-- <p style=\"font-size: 20px; font-weight: bold; color: white;position: absolute;left: 3%;\">My stats</p> -->\n    <p style=\"font-size: 12px;position: absolute;color: rgb(150, 141, 141);left: 3%;\">Your content at a bird eye's view</p>\n  </div>\n  <div class=\"stats2\">\n  \n    \n    <p style=\"font-size: 12px;font-weight: bold; color: white;position: absolute;left: 3%;\">My stats</p> \n   \n  </div>\n  <div class=\"catagories\">\n  \n    <ion-card  style=\"width:40%; background-color: #A944F1; height: 100%;\">\n      <p style=\"position: absolute;left: 5%;top: 2%;font-weight: bold;font-size: 20px;\">256</p>\n    <p style=\"position: absolute; right:5%;bottom: 2%;font-size: 10px;\">Users</p>\n    </ion-card>\n    <ion-card  style=\"width:40%; background-color: #16D6E3; height: 100%;font-size: 20px;font-weight: bold\">\n       <p style=\"position: absolute;left:5%;top: 2%;\">300</p>\n       <p style=\"position: absolute; right:5%;bottom: 2%;font-size: 10px;\">Profits</p>\n      </ion-card>\n    <ion-card  style=\"width:40%; background-color: #2D98E6; height: 100%;font-size: 20px;font-weight: bold\">  \n       <p style=\"position: absolute;left: 5%;top: 2%;\">150</p>\n       <p style=\"position: absolute; right:5%;bottom: 2%;font-size: 10px;\">Spaces</p>\n      </ion-card>\n  </div>\n  \n  <div class=\"bottom\">\n    <!-- <div class=\"bottomText\">\n      Scenes\n    </div>\n  <div class=\"bottom1\"> <img style=\"width: 90%; height: 100%;\" src=\"assets/owner.jpg\" alt=\"\"> </div>\n  <div class=\"bottom2\"> <img style=\"width: 100%; height: 100%;\" src=\"assets/owner1.jpg\" alt=\"\"> </div>\n  <div class=\"bottom3\"> <img style=\"width: 100%; height: 100%;\" src=\"assets/owner2.jpg\" alt=\"\"></div> -->\n  \n  \n  <ion-segment style=\"position: absolute; top: 0%;\" [(ngModel)]=\"selectedtabs\" >\n    <ion-segment-button  value=\"History\" >\n      <ion-label style=\"color:grey;\">New bookings</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Newbookings\">\n      <ion-label style=\"color: grey;\">History</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  \n   <div class=\"segments\" style=\"width: 100%; height: 85%;position: absolute;bottom:0px;\" *ngIf=\"selectedtabs == 'History'\">  \n   <ion-card style=\"width: 80%;height: 90%;background-color: black; opacity: 30%;\">\n  New bookings\n   </ion-card>\n  </div>\n  <div class=\"segments\" style=\"width: 100%; height: 85%;position: absolute;bottom:0px;\" *ngIf=\"selectedtabs == 'Newbookings'\"> \n    \n    <ion-card style=\"width: 80%;height: 90%;background-color: black; opacity: 30%; \">\n      History\n    </ion-card>\n   \n    \n    \n    </div> \n  \n  </div>\n  <!-- <ion-avatar style=\"position: absolute; top:5%; right: 5%;\">\n    <img  src=\"assets/bg.jpg\">\n  </ion-avatar> -->\n  <!-- <ion-icon  [routerLink]=\"'/profile'\" style=\"position: absolute; top:10%; right: 4%; background-color:white;border-radius: 50%;\"  name=\"add\"></ion-icon> -->\n  </div>\n  \n  </ion-content>\n  <ion-footer style=\"position: absolute; height: 50px;bottom: 0px;background-color:  #303d3d; display: flex;justify-content: center;align-items: center;\" >\n  \n    <ion-icon [routerLink]=\"'/profile'\" style=\"font-size: 30px;position: absolute;right: 7%;color: grey;\" name=\"person-outline\"></ion-icon>\n    <ion-icon [routerLink]=\"'/favourites'\" style=\"font-size: 30px;position: absolute;right: 33%;color: grey;\" name=\"heart-outline\"></ion-icon>\n    <ion-icon [routerLink]=\"'/owner-landing'\" style=\"font-size: 30px;position: absolute;left: 7%;color: grey;\" name=\"home-outline\"></ion-icon>\n    <ion-icon [routerLink]=\"'/add-space'\" style=\"position: absolute;left:33%;font-size: 30px;color: grey;\" name=\"add-circle-outline\"></ion-icon>\n  </ion-footer>\n  ");

/***/ }),

/***/ "./src/app/pages/owner-landing/owner-landing-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/owner-landing/owner-landing-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OwnerLandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerLandingPageRoutingModule", function() { return OwnerLandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _owner_landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner-landing.page */ "./src/app/pages/owner-landing/owner-landing.page.ts");




const routes = [
    {
        path: '',
        component: _owner_landing_page__WEBPACK_IMPORTED_MODULE_3__["OwnerLandingPage"]
    }
];
let OwnerLandingPageRoutingModule = class OwnerLandingPageRoutingModule {
};
OwnerLandingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OwnerLandingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/owner-landing/owner-landing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/owner-landing/owner-landing.module.ts ***!
  \*************************************************************/
/*! exports provided: OwnerLandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerLandingPageModule", function() { return OwnerLandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _owner_landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./owner-landing-routing.module */ "./src/app/pages/owner-landing/owner-landing-routing.module.ts");
/* harmony import */ var _owner_landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner-landing.page */ "./src/app/pages/owner-landing/owner-landing.page.ts");







let OwnerLandingPageModule = class OwnerLandingPageModule {
};
OwnerLandingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _owner_landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["OwnerLandingPageRoutingModule"]
        ],
        declarations: [_owner_landing_page__WEBPACK_IMPORTED_MODULE_6__["OwnerLandingPage"]]
    })
], OwnerLandingPageModule);



/***/ }),

/***/ "./src/app/pages/owner-landing/owner-landing.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/owner-landing/owner-landing.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  --background: #1D2729;\n}\n\n.bgImg {\n  position: absolute;\n  height: 70%;\n  width: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n  background-color: #1D2729;\n  opacity: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.textBorder {\n  width: 100%;\n  height: 29%;\n  border-right: 0px;\n  border-left: 0px;\n  border-top: 0px;\n  border-color: grey;\n  position: absolute;\n  top: 3%;\n  left: 3px;\n  border-width: 1px;\n  color: white;\n}\n\n.date {\n  font-size: 10px;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.stats {\n  border-radius: 6px;\n  background-color: #303d3d;\n  width: 90%;\n  height: 5%;\n  border-color: white;\n  position: absolute;\n  top: 30%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.stats2 {\n  border-radius: 6px;\n  width: 90%;\n  height: 5%;\n  border-color: white;\n  position: absolute;\n  top: 35%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.catagories {\n  width: 100%;\n  height: 10%;\n  border-color: honeydew;\n  position: absolute;\n  bottom: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.bottom {\n  width: 100%;\n  height: 40%;\n  position: absolute;\n  bottom: 9%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-right: 0px;\n  border-left: 0px;\n  border-bottom: 0px;\n  border-width: 1px;\n}\n\n.bottom1 {\n  width: 50%;\n  height: 70%;\n  position: absolute;\n  left: 5%;\n  top: 20%;\n}\n\n.bottom2 {\n  width: 45%;\n  height: 33%;\n  position: absolute;\n  right: 3%;\n  top: 20%;\n}\n\n.bottom3 {\n  width: 45%;\n  height: 35%;\n  position: absolute;\n  right: 3%;\n  top: 55%;\n}\n\n.bottomText {\n  position: absolute;\n  top: 0%;\n  left: 5%;\n  color: #9c9c9c;\n  top: 12%;\n}\n\nion-card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.history {\n  background-color: white;\n  width: 70%;\n  height: 90%;\n}\n\n.segments {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXItbGFuZGluZy9vd25lci1sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdFO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUtFO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDRCx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZMOztBQUtFO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFFRixpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBRUQsWUFBQTtBQUpMOztBQU1FO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFITjs7QUFLRTtFQUVFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFPRTtFQUVFLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBV0U7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUVKLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFWRjs7QUFlRTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBR0osa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtBQWZGOztBQWtCRTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQWhCRjs7QUFrQkU7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFoQk47O0FBbUJNO0VBQ0UsVUFBQTtFQUNFLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBakJWOztBQW1CVTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQWhCZDs7QUFrQlU7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFmZDs7QUFrQlU7RUFDRSx1QkFBQTtFQUdBLFVBQUE7RUFDQSxXQUFBO0FBakJaOztBQXFCRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBbEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3duZXItbGFuZGluZy9vd25lci1sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlciA7ICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzFEMjcyOTtcclxuICB9XHJcbiAgXHJcbiAgLmJnSW1ne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDcwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVye1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMxRDI3Mjk7XHJcbiAgICAgb3BhY2l0eTogOTAlO1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgLnRleHRCb3JkZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDI5JTtcclxuICAgICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXItbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMHB4O1xyXG4gICAgICBib3JkZXItY29sb3I6IGdyZXk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzJTtcclxuICAgICAgbGVmdDogM3B4O1xyXG4gICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICBcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5kYXRle1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLnN0YXRzeyBcclxuICAgIC8vYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzMwM2QzZDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnN0YXRzMnsgXHJcbiAgICAvL2JvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgXHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5jYXRhZ29yaWVze1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBob25leWRldztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1MCU7XHJcbiAgICAgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gIFxyXG4gIH1cclxuICBcclxuICAuYm90dG9te1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLy9ib3JkZXItY29sb3I6IGhvbmV5ZGV3O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDklO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmlnaHQ6IDBweDtcclxuICBib3JkZXItbGVmdDogMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDBweDtcclxuICBcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBcclxuICB9XHJcbiAgLmJvdHRvbTF7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDcwJTtcclxuICAvL2JvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUlO1xyXG4gIHRvcDogMjAlO1xyXG4gIH1cclxuICAuYm90dG9tMntcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgIC8vYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMyU7XHJcbiAgICAgIHRvcDogMjAlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5ib3R0b20ze1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM1JTtcclxuICAgICAgICAgIC8vYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAzJTtcclxuICAgICAgICAgIHRvcDo1NSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm90dG9tVGV4dHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE1NiwgMTU2LCAxNTYpO1xyXG4gICAgICAgICAgICAgIHRvcDogMTIlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAuaGlzdG9yeXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2JvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAuc2VnbWVudHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/owner-landing/owner-landing.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/owner-landing/owner-landing.page.ts ***!
  \***********************************************************/
/*! exports provided: OwnerLandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerLandingPage", function() { return OwnerLandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OwnerLandingPage = class OwnerLandingPage {
    constructor() { }
    ngOnInit() {
    }
};
OwnerLandingPage.ctorParameters = () => [];
OwnerLandingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-owner-landing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./owner-landing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner-landing/owner-landing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./owner-landing.page.scss */ "./src/app/pages/owner-landing/owner-landing.page.scss")).default]
    })
], OwnerLandingPage);



/***/ })

}]);
//# sourceMappingURL=pages-owner-landing-owner-landing-module-es2015.js.map