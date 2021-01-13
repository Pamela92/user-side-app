(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signin-signin-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSigninSigninPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <h1 class=\"header\" style=\"text-align: center; font-weight: bolder; color: rgb(53, 53, 87);\" >Sign In</h1>\n \n  <div class=\"FormHolder\">\n     \n   <div class=\"ion-padding\">\n   <form class=\"formload\" [formGroup]=\"LoginForm\" (ngSubmit)=\"submit()\" class=\"ion-padding\">\n   \n     <div class=\"wrap-input\">\n     <input class=\"input\" type=\"email\"  formControlName=\"email\" placeholder=\"Email\">\n     <div *ngFor=\"let error of errorMessages.email\">\n       <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\n         <small class=\"error-message\">{{error.message}}</small>\n       </ng-container>\n     </div>\n     </div>\n     <br>\n         <div class=\"wrap-input\">\n         <input class=\"input\" type=\"password\" formControlName=\"password\" placeholder=\"Password\">\n         <div *ngFor=\"let error of errorMessages.password\">\n           <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || email.touched)\">\n             <small class=\"error-message\">{{error.message}}</small>\n           </ng-container>\n         </div>  \n         </div>  \n         <br><br>\n         <div class=\"container-form-btn\">\n         <button  class=\"form-btn custom-font\" type=\"submit\" [disabled]=\"!LoginForm.valid\">Sign In</button>\n         </div>\n         <p class=\"social\" style=\"text-align: center;\">Or using social media</p>\n         <div class=\"icons\">\n         <ion-icon name=\"logo-facebook\"></ion-icon><ion-icon class=\"google\" name=\"logo-google\"></ion-icon><ion-icon class=\"twitter\" name=\"logo-twitter\"></ion-icon>\n         </div>\n           <label class=\"account\" [routerLink]=\"'/signup'\">Don't have an account?</label>Sign Up\n   </form>\n   </div>\n   </div>\n </ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/signin/signin-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/signin/signin-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SigninPageRoutingModule */

    /***/
    function srcAppPagesSigninSigninRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function () {
        return SigninPageRoutingModule;
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


      var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signin.page */
      "./src/app/pages/signin/signin.page.ts");

      var routes = [{
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
      }];

      var SigninPageRoutingModule = function SigninPageRoutingModule() {
        _classCallCheck(this, SigninPageRoutingModule);
      };

      SigninPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SigninPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/signin/signin.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/signin/signin.module.ts ***!
      \***********************************************/

    /*! exports provided: SigninPageModule */

    /***/
    function srcAppPagesSigninSigninModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninPageModule", function () {
        return SigninPageModule;
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


      var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signin-routing.module */
      "./src/app/pages/signin/signin-routing.module.ts");
      /* harmony import */


      var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signin.page */
      "./src/app/pages/signin/signin.page.ts");

      var SigninPageModule = function SigninPageModule() {
        _classCallCheck(this, SigninPageModule);
      };

      SigninPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"]],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
      })], SigninPageModule);
      /***/
    },

    /***/
    "./src/app/pages/signin/signin.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/signin/signin.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSigninSigninPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.account {\n  font-size: 14px;\n}\n\n.social {\n  font-size: 14px;\n  color: #A944F1;\n}\n\nion-icon {\n  color: #0c0cd6;\n  font-size: 30px;\n}\n\n.twitter {\n  color: #2d98e6;\n}\n\n.google {\n  color: #fd5454;\n}\n\n.icons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n\n.wrap-input {\n  background-color: #585656;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.12);\n}\n\n.input {\n  display: flex;\n  width: 100%;\n  background: transparent;\n  font-family: Josefin Sans;\n  font-size: 16px;\n  line-height: 1.2;\n  border: none;\n  outline: none;\n  height: 46px;\n  padding: 0 20px 0 23px;\n}\n\n.container-form-btn {\n  display: flex;\n  justify-content: center;\n}\n\n.form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 160px;\n  height: 42px;\n  background-color: #16D6E3;\n  border-radius: 20px;\n  font-size: 14px;\n  color: white;\n  padding-top: 5px;\n  transition: all 0.4s;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.5);\n}\n\n.form-btn:hover {\n  background-color: #28333b;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.8);\n}\n\nion-padding {\n  justify-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFGSjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0FBSEo7O0FBS0E7RUFDSSxjQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlEQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGlEQUFBO0FBRko7O0FBS0E7RUFDSSxvQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuXHJcbn1cclxuXHJcblxyXG4uYWNjb3VudHtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG5cclxufVxyXG5cclxuLnNvY2lhbHtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgY29sb3I6ICNBOTQ0RjE7XHJcblxyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDEyLCAxMiwgMjE0KTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG4udHdpdHRlcntcclxuICAgIGNvbG9yOiAjMmQ5OGU2O1xyXG59XHJcbi5nb29nbGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgODQsIDg0KTtcclxufVxyXG5cclxuLmljb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xyXG59XHJcblxyXG4ud3JhcC1pbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgODYsIDg2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LCA3MSwgODIsIDAuMTIpO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LWZhbWlseTogSm9zZWZpbiBTYW5zO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyM3B4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZvcm0tYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tYnRuIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZENkUzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC41KTtcclxufVxyXG5cclxuLmZvcm0tYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzMzYjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LCA3MSwgODIsIDAuOCk7XHJcbn1cclxuXHJcbmlvbi1wYWRkaW5ne1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IFxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/signin/signin.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/signin/signin.page.ts ***!
      \*********************************************/

    /*! exports provided: SigninPage */

    /***/
    function srcAppPagesSigninSigninPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninPage", function () {
        return SigninPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/sign-in-sign-up.service */
      "./src/app/sign-in-sign-up.service.ts");

      var SigninPage = /*#__PURE__*/function () {
        function SigninPage(formBuilder, accountService, router, nav, loadingCtrl, alertCtrl) {
          _classCallCheck(this, SigninPage);

          this.formBuilder = formBuilder;
          this.accountService = accountService;
          this.router = router;
          this.nav = nav;
          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this.showpassword = false;
          this.passwordToggleIcon = 'eye';
          this.LoginForm = this.formBuilder.group({
            email: [''],
            password: ['']
          });
          this.errorMessages = {
            email: [{
              type: 'required',
              message: 'Email is required'
            }, {
              type: 'pattern',
              message: 'Please enter a valid email address'
            }],
            password: [{
              type: 'required',
              message: 'password number is required'
            }, {
              type: 'pattern',
              message: 'Please enter a valid password'
            }]
          };
        }

        _createClass(SigninPage, [{
          key: "togglePassword",
          value: function togglePassword() {
            this.showpassword = !this.showpassword;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.LoginForm = this.formBuilder.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create();

                    case 2:
                      loading = _context.sent;
                      // this.fbservice.signAuth();
                      console.log(this.LoginForm.value);
                      this.accountService.SignIn(this.LoginForm.value.email, this.LoginForm.value.password).then(function (res) {// console.log(res.user);
                      }).then(function () {
                        loading.dismiss().then(function () {// this.router.navigateByUrl('/update-space');
                        });
                      }, function (error) {
                        loading.dismiss().then(function () {
                          console.log(error);
                        });
                      });
                      _context.next = 7;
                      return loading.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "email",
          get: function get() {
            return this.LoginForm.get("email");
          }
        }, {
          key: "password",
          get: function get() {
            return this.LoginForm.get('password');
          }
        }]);

        return SigninPage;
      }();

      SigninPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_5__["SignInSignUpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      SigninPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signin.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./signin.page.scss */
        "./src/app/pages/signin/signin.page.scss"))["default"]]
      })], SigninPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-signin-signin-module-es5.js.map