(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"wrapper\">\n\n  <h1 style=\"text-align: center; font-weight: bolder; color: rgb(53, 53, 87);\" >Sign Up</h1>\n\n  <div class=\"FormHolder\">\n    \n    <div class=\"ion-padding\">\n    <form class=\"formload\" [formGroup]=\"createForm\" (ngSubmit)=\"submit()\" class=\"ion-padding\">\n    \n      <div class=\"wrap-input\">\n      <input class=\"input\" type=\"email\"  formControlName=\"email\" placeholder=\"Email\">\n      <div *ngFor=\"let error of errorMessages.email\">\n        <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n      </div>\n      <br>\n          <div class=\"wrap-input\">\n          <input class=\"input\" type=\"password\" formControlName=\"password\" placeholder=\"Password\">\n          <div *ngFor=\"let error of errorMessages.password\">\n            <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || email.touched)\">\n              <small class=\"error-message\">{{error.message}}</small>\n            </ng-container>\n          </div>  \n          </div>  \n          <br><br>\n          <div class=\"container-form-btn\">\n          <!-- <button class=\"form-btn custom-font\" type=\"submit\" [disabled]=\"!createForm.valid\">Sign Up</button> -->\n          <ion-button type=\"submit\" [disabled]=\"!createForm.valid\" expand=\"block\" style=\"width: 90%; height: 40px;\" shape=\"round\">Sign up</ion-button>\n          </div>\n          <p class=\"social\" style=\"text-align: center;\">Or using social media</p>\n          <div class=\"icons\">\n          <ion-icon name=\"logo-facebook\"></ion-icon><ion-icon class=\"google\" name=\"logo-google\"></ion-icon><ion-icon class=\"twitter\" name=\"logo-twitter\"></ion-icon>\n        </div>\n            <label class=\"account\" [routerLink]=\"'/signin'\">Already have an account?</label>Sign In\n    </form>\n    </div>\n    </div>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.p {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  font-size: 12px;\n}\n\n.account {\n  font-size: 14px;\n}\n\n.social {\n  font-size: 14px;\n  color: #A944F1;\n}\n\nion-icon {\n  color: #0c0cd6;\n  font-size: 30px;\n}\n\n.twitter {\n  color: #2d98e6;\n}\n\n.google {\n  color: #fd5454;\n}\n\n.icons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n\n.wrap-input {\n  background-color: #585656;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.12);\n}\n\n.input {\n  display: flex;\n  width: 100%;\n  background: transparent;\n  font-family: Josefin Sans;\n  font-size: 16px;\n  line-height: 1.2;\n  border: none;\n  outline: none;\n  height: 46px;\n  padding: 0 20px 0 23px;\n}\n\n.container-form-btn {\n  display: flex;\n  justify-content: center;\n}\n\n.form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 160px;\n  height: 42px;\n  background-color: #16D6E3;\n  border-radius: 20px;\n  font-size: 14px;\n  color: white;\n  padding-top: 5px;\n  transition: all 0.4s;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.5);\n}\n\n.form-btn:hover {\n  background-color: #28333b;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.8);\n}\n\nion-padding {\n  justify-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpREFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxpREFBQTtBQUFKOztBQUdBO0VBQ0ksb0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcblxyXG59XHJcbi5we1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYWNjb3VudHtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG5cclxufVxyXG5cclxuLnNvY2lhbHtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgY29sb3I6ICNBOTQ0RjE7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGNvbG9yOiByZ2IoMTIsIDEyLCAyMTQpO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuXHJcbi50d2l0dGVye1xyXG4gICAgY29sb3I6ICMyZDk4ZTY7XHJcbn1cclxuXHJcbi5nb29nbGV7XHJcbiAgICBjb2xvcjpyZ2IoMjUzLCA4NCwgODQpO1xyXG59XHJcblxyXG4uaWNvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbn1cclxuXHJcbi53cmFwLWlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCA4NiwgODYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC4xMik7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtZmFtaWx5OiBKb3NlZmluIFNhbnM7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIzcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZm9ybS1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1idG4ge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNkQ2RTM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSg1NywgNzEsIDgyLCAwLjUpO1xyXG59XHJcblxyXG4uZm9ybS1idG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzMzNiO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC44KTtcclxufVxyXG5cclxuaW9uLXBhZGRpbmd7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sign-in-sign-up.service */ "./src/app/sign-in-sign-up.service.ts");








let SignupPage = class SignupPage {
    constructor(formBuilder, accountService, router, nav, loadingCtrl, alertCtrl) {
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.router = router;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.createForm = this.formBuilder.group({
            email: [''],
            password: ['']
        });
        this.errorMessages = {
            email: [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Please enter a valid email address' }
            ],
            password: [
                { type: 'required', message: 'Email is required' }
            ]
        };
    }
    get email() {
        return this.createForm.get("email");
    }
    get password() {
        return this.createForm.get("password");
    }
    ngOnInit() {
        this.createForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    // public submit() {
    //   console.log(this.createForm.value.password);
    //   console.log(this.createForm.value.email);
    //   this.accountService.createAccount(this.createForm.value.email,this.createForm.value.password)
    // }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: `Your account is registered successfully, click Okay to continue to login.`,
                buttons: [
                    {
                        text: 'Okay',
                        handler: () => {
                            console.log(this.createForm.value);
                            // this.isSubmitted = true;
                            if (this.createForm.valid) {
                                this.accountService.Signup(this.createForm.value.email, this.createForm.value.password).then((res) => {
                                    return firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore().collection('Users').doc(res.user.uid).set({
                                        // name: this.RegForm.value.name,
                                        // lastname: this.RegForm.value.lastname,
                                        email: this.createForm.value.email,
                                        password: this.createForm.value.password
                                    }).then(() => {
                                        console.log(res.user);
                                        this.router.navigate(['/signin']);
                                    }).catch(function (error) {
                                        console.log(error);
                                    });
                                });
                            }
                        }
                    },
                ]
            });
            return yield alert.present();
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_7__["SignInSignUpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map