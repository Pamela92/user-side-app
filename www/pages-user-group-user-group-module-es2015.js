(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-group-user-group-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-group/user-group.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-group/user-group.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>user-group</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-radio-group [(ngModel)]=\"value_selected\"> \n    <ion-list-header>\n      <ion-label>User Froup</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>User</ion-label>\n      <ion-radio slot=\"start\" color=\"success\"  value=\"user\" ></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Owner</ion-label>\n      <ion-radio slot=\"start\" color=\"tertiary\"  value=\"owner\" ></ion-radio>\n    </ion-item>\n   </ion-radio-group> \n{{value_selected}}\n<ion-item>\n  <ion-button (click)=\"submit()\"  type=\"submit\" expand=\"block\" >Submit</ion-button>\n</ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/user-group/user-group-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/user-group/user-group-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UserGroupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupPageRoutingModule", function() { return UserGroupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_group_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-group.page */ "./src/app/pages/user-group/user-group.page.ts");




const routes = [
    {
        path: '',
        component: _user_group_page__WEBPACK_IMPORTED_MODULE_3__["UserGroupPage"]
    }
];
let UserGroupPageRoutingModule = class UserGroupPageRoutingModule {
};
UserGroupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserGroupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user-group/user-group.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/user-group/user-group.module.ts ***!
  \*******************************************************/
/*! exports provided: UserGroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupPageModule", function() { return UserGroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_group_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-group-routing.module */ "./src/app/pages/user-group/user-group-routing.module.ts");
/* harmony import */ var _user_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-group.page */ "./src/app/pages/user-group/user-group.page.ts");







let UserGroupPageModule = class UserGroupPageModule {
};
UserGroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_group_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserGroupPageRoutingModule"]
        ],
        declarations: [_user_group_page__WEBPACK_IMPORTED_MODULE_6__["UserGroupPage"]]
    })
], UserGroupPageModule);



/***/ }),

/***/ "./src/app/pages/user-group/user-group.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/user-group/user-group.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItZ3JvdXAvdXNlci1ncm91cC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/user-group/user-group.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/user-group/user-group.page.ts ***!
  \*****************************************************/
/*! exports provided: UserGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupPage", function() { return UserGroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sign-in-sign-up.service */ "./src/app/sign-in-sign-up.service.ts");


// import { FormBuilder, Validators } from "@angular/forms";


let UserGroupPage = class UserGroupPage {
    constructor(accountServices, router) {
        this.accountServices = accountServices;
        this.router = router;
        this.accountServices.getEmail();
        this.accountServices.getUserSession();
    }
    ngOnInit() {
    }
    submit() {
        this.accountServices.userGroup(this.accountServices.getUserSession(), this.value_selected, this.accountServices.getEmail());
        console.log(this.value_selected);
    }
};
UserGroupPage.ctorParameters = () => [
    { type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_3__["SignInSignUpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserGroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-group',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-group.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-group/user-group.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-group.page.scss */ "./src/app/pages/user-group/user-group.page.scss")).default]
    })
], UserGroupPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-group-user-group-module-es2015.js.map