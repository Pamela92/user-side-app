(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-space-add-space-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-space/add-space.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-space/add-space.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div class=\"holder\">\n    \n    <ion-icon style=\"position: absolute;left:3%;font-size: 30px;top: 15%;color: #838383;\" name=\"images-outline\"></ion-icon>\n    <div class=\"top\">\n      <p style=\"font-size: 30px; font-weight: bold; color:whitesmoke;position: absolute;left: 10%;\">Add your space</p>\n    </div>\n    <ion-button style=\"position: absolute;top: 15%;right: 5%;height: 20px;--background:#303d3d\"> Submit</ion-button>\n  <div style=\"position: absolute;width: 6.5%;height: 4%; border-radius: 50%; background-color:white;top: 15%;left: 1%; display: flex;justify-content: center;align-items: center;\">\n    <ion-icon style=\"font-size: 20px;color: white;background-color: #16D6E3; border-radius: 50%;\" name=\"add-circle-outline\"></ion-icon>\n  </div>\n  \n    <div class=\"bottom\">\n      <ion-button style=\"position: absolute;top: 5%;right: 20%;\"> Submit</ion-button>\n      <form style=\"height: 100%;\" >\n        <ion-item>\n          <ion-label>Space category</ion-label>\n          <ion-select >\n              <ion-select-option value=\"private office\">Private Office</ion-select-option>\n              <ion-select-option value=\"boardroom\">BoardRoom</ion-select-option>\n              <ion-select-option value=\"Pair\">Pair Office</ion-select-option>\n              <ion-select-option value=\"Sharing\">Cubical</ion-select-option>\n              <ion-select-option value=\"OpenSpace\">Open Plan</ion-select-option>\n           \n          </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Category Number</ion-label>\n        <ion-select>\n          \n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n   \n        </ion-select>\n    </ion-item>\n    <p style=\"font-size: 12px;font-weight: bold; text-align: center\">Enter your address below.</p>\n    <ion-item><ion-input placeholder=\"Address\"></ion-input></ion-item>\n    <ion-item><ion-input placeholder=\"City\"></ion-input></ion-item>\n    <ion-item><ion-input placeholder=\"Province\"></ion-input></ion-item>\n  \n    <div style=\"height: 40%; overflow: visible;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div style=\"font-size: 12px;\">wifi <br> <input type=\"checkbox\">\n          </div>\n        </ion-col>\n        <ion-col>\n          <div style=\"font-size: 12px;\">Phone <br> <input type=\"checkbox\"></div>\n        </ion-col>\n        <ion-col>\n          <div style=\"font-size: 12px;\">Printer <br> <input type=\"checkbox\"></div>\n        </ion-col>\n        <ion-col>\n          <div style=\"font-size: 12px;\">Projector <br> <input type=\"checkbox\"></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- ............................................................................................. -->\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div style=\"font-size: 12px;\">Television <br> <input type=\"checkbox\">\n          </div>\n        </ion-col>\n        <ion-col>\n          <div style=\"font-size: 12px;\">Desk <br> <input type=\"checkbox\"></div>\n        </ion-col>\n        <ion-col>\n          <div style=\"font-size: 12px;\">Chairs<br> <input type=\"checkbox\"></div>\n        </ion-col>\n        <ion-col>\n          <div style=\"font-size: 12px;\">Aircon <br> <input type=\"checkbox\"></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div style=\"font-size: 12px;\">Parking <br> <input type=\"checkbox\">\n          </div>\n        </ion-col>\n        <ion-col>\n          <div style=\"font-size: 11px;\">Security 24/7 <br> <input type=\"checkbox\"></div>\n        </ion-col>\n        <ion-col>\n          <div style=\"font-size: 12px;\">Camera <br> <input type=\"checkbox\"></div>\n        </ion-col>\n        <ion-col>\n          <div style=\"font-size: 12px;\">Curport <br> <input type=\"checkbox\"></div>\n        </ion-col>\n        \n      </ion-row>\n    </ion-grid>\n    </div>\n  \n      </form>\n  \n    </div>\n  </div>\n  </ion-content>\n  <ion-footer style=\"position: absolute; height: 50px;bottom: 0px;background-color:  #303d3d; display: flex;justify-content: center;align-items: center;\" >\n    \n    <ion-icon [routerLink]=\"'/profile'\" style=\"font-size: 30px;position: absolute;right: 7%;color: grey;\" name=\"person-outline\"></ion-icon>\n    <ion-icon [routerLink]=\"'/favourites'\" style=\"font-size: 30px;position: absolute;right: 45%;color: grey;\" name=\"heart-outline\"></ion-icon>\n    <ion-icon [routerLink]=\"'/owner-landing'\" style=\"font-size: 30px;position: absolute;left: 7%;color: grey;\" name=\"home-outline\"></ion-icon>\n    <!-- <ion-icon [routerLink]=\"'/upload-space'\" style=\"position: absolute;left:33%;font-size: 30px;color: grey;\" name=\"add-circle-outline\"></ion-icon> -->\n  </ion-footer>");

/***/ }),

/***/ "./src/app/pages/add-space/add-space-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/add-space/add-space-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddSpacePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSpacePageRoutingModule", function() { return AddSpacePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_space_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-space.page */ "./src/app/pages/add-space/add-space.page.ts");




const routes = [
    {
        path: '',
        component: _add_space_page__WEBPACK_IMPORTED_MODULE_3__["AddSpacePage"]
    }
];
let AddSpacePageRoutingModule = class AddSpacePageRoutingModule {
};
AddSpacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddSpacePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/add-space/add-space.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-space/add-space.module.ts ***!
  \*****************************************************/
/*! exports provided: AddSpacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSpacePageModule", function() { return AddSpacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_space_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-space-routing.module */ "./src/app/pages/add-space/add-space-routing.module.ts");
/* harmony import */ var _add_space_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-space.page */ "./src/app/pages/add-space/add-space.page.ts");







let AddSpacePageModule = class AddSpacePageModule {
};
AddSpacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_space_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddSpacePageRoutingModule"]
        ],
        declarations: [_add_space_page__WEBPACK_IMPORTED_MODULE_6__["AddSpacePage"]]
    })
], AddSpacePageModule);



/***/ }),

/***/ "./src/app/pages/add-space/add-space.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-space/add-space.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".holder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.top {\n  width: 100%;\n  height: 13%;\n  position: absolute;\n  top: 0px;\n  background-color: #303d3d;\n  opacity: 80%;\n}\n\n.bottom {\n  width: 90%;\n  height: 80%;\n  position: absolute;\n  bottom: 0px;\n}\n\nion-select {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXNwYWNlL2FkZC1zcGFjZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLXNwYWNlL2FkZC1zcGFjZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9sZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50b3B7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTMlO1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzAzZDNkO1xyXG4gICAgb3BhY2l0eTogODAlO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTIwcHg7XHJcbn1cclxuLmJvdHRvbXtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuXHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/add-space/add-space.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/add-space/add-space.page.ts ***!
  \***************************************************/
/*! exports provided: AddSpacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSpacePage", function() { return AddSpacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AddSpacePage = class AddSpacePage {
    constructor() { }
    ngOnInit() {
    }
};
AddSpacePage.ctorParameters = () => [];
AddSpacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-space',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-space.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-space/add-space.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-space.page.scss */ "./src/app/pages/add-space/add-space.page.scss")).default]
    })
], AddSpacePage);



/***/ })

}]);
//# sourceMappingURL=pages-add-space-add-space-module-es2015.js.map