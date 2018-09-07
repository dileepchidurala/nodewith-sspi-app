(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(iconRegistry, sanitizer) {
        this.title = 'keralafundproject';
        iconRegistry.addSvgIcon('teradata', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'));
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"form\">\n  <form class=\"form\" [formGroup]=\"details\" (ngSubmit)=\"Submit(details.value)\">\n    {{msg}}\n    <mat-form-field>\n      <input matInput placeholder=\"Amount to contribute\" type=\"text\" pattern=\"[0-9]*\" name=\"Amount\" [formControl]=\"details.controls['amount']\"\n        formControlName=\"amount\">\n    </mat-form-field>\n\n    <div *ngIf=\"!details.valid\">\n      <p style=\"color: red\">*Only Positive Integral values are accpeted</p>\n      <button mat-raised-button color color=\"warn\" type=\"submit\" value=\"Submit\" [disabled]=\"!details.valid\">Contribute</button>\n      <!-- <input type=\"submit\" class=\"cta-btn filled\" value=\"Submit\" [disabled]=\"!details.valid\" class=\"button-off\"> -->\n    </div>\n    <div *ngIf=\"details.valid\">\n      <button mat-raised-button color color=\"primary\" type=\"submit\" value=\"Submit\" [disabled]=\"!details.valid\">Contribute</button>\n      <!-- <input type=\"submit\" class=\"cta-btn filled\" value=\"Submit\" [disabled]=\"!details.valid\" class=\"button-on\"> -->\n    </div>\n  </form>\n</div>\n<div *ngIf=\"form===false\">\n  {{msg}}\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keralafundsservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keralafundsservice.service */ "./src/app/keralafundsservice.service.ts");
/* harmony import */ var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @covalent/core/dialogs */ "./node_modules/@covalent/core/esm5/covalent-core-dialogs.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormComponent = /** @class */ (function () {
    function FormComponent(keralaservice, fb, _dialogService, _viewContainerRef) {
        this.keralaservice = keralaservice;
        this.fb = fb;
        this._dialogService = _dialogService;
        this._viewContainerRef = _viewContainerRef;
        this.form = true;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.details = this.fb.group({
            amount: [
                ,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)
                ])
            ]
        });
    };
    FormComponent.prototype.Submit = function (values) {
        var cash = +values.amount;
        this.openConfirm(cash);
    };
    FormComponent.prototype.openConfirm = function (amount) {
        var _this = this;
        this._dialogService
            .openConfirm({
            message: "The amount you want to contribute is " + amount + ". Is this okay?",
            disableClose: false,
            viewContainerRef: this._viewContainerRef,
            title: 'Confirm',
            cancelButton: 'No, I want to cancel',
            acceptButton: 'Yes',
            width: '500px'
        })
            .afterClosed()
            .subscribe(function (accept) {
            if (accept) {
                // DO SOMETHING
                var postdetails = {
                    id: _this.keralaservice.user.name.substring(3),
                    name: _this.keralaservice.user.name,
                    amount: amount
                };
                _this.keralaservice.postamount(postdetails).subscribe(function (result) {
                    if (result === 201) {
                        _this.msg =
                            'Your submission has be updated thanks for submission. A mail will be sent to you';
                    }
                    if (result === 501) {
                        _this.msg =
                            'Some error has been occured please try again or contact us';
                    }
                    _this.form = false;
                }, function (error) {
                    console.log('got it');
                    if (error.status === 501) {
                        _this.msg =
                            'Some error has been occured please try again or contact us';
                    }
                    _this.form = false;
                });
            }
            else {
                // DO SOMETHING ELSE
                console.log('DO nothing');
            }
        });
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_keralafundsservice_service__WEBPACK_IMPORTED_MODULE_1__["KeralafundsserviceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_2__["TdDialogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/keralafundsservice.service.ts":
/*!***********************************************!*\
  !*** ./src/app/keralafundsservice.service.ts ***!
  \***********************************************/
/*! exports provided: KeralafundsserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeralafundsserviceService", function() { return KeralafundsserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KeralafundsserviceService = /** @class */ (function () {
    function KeralafundsserviceService(http) {
        this.http = http;
        this.url = 'http://172.16.117.245:3000/';
        this.user = 'mock user';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    KeralafundsserviceService.prototype.getuser = function () {
        var _this = this;
        return this.http.get(this.url + 'user', { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return (_this.user = result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getuser', [])));
    };
    KeralafundsserviceService.prototype.validate = function () {
        var id = this.user.name.substring(3);
        return this.http
            .get(this.url + "api/validate/?id=" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('validate')));
    };
    KeralafundsserviceService.prototype.postamount = function (details) {
        return this.http
            .post(this.url + 'api/contribute', details, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('postamount')));
    };
    KeralafundsserviceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            // console.error(error); // log to console instead
            result = error.status;
            // TODO: better job of transforming error for user consumption
            // Let the app keep running by returning an empty result.
            // console.log(result as T);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    KeralafundsserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], KeralafundsserviceService);
    return KeralafundsserviceService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  Hai {{user}}\n</p>\n<button>click me to test</button> -->\n\n<td-layout>\n  <td-navigation-drawer flex sidenavTitle=\"Covalent\" logo=\"teradata\" name={{user}} email={{email}}>\n    <!-- <mat-nav-list>\n    <a *ngFor=\"let item of routes\" mat-list-item><mat-icon>{{item.icon}}</mat-icon>{{item.title}}</a>\n  </mat-nav-list> -->\n    <div td-navigation-drawer-menu>\n      <mat-nav-list>\n        <a *ngFor=\"let item of usermenu\" mat-list-item>\n          <mat-icon>{{item.icon}}</mat-icon>{{item.title}}\n        </a>\n      </mat-nav-list>\n    </div>\n  </td-navigation-drawer>\n  <td-layout-nav color=\"accent\">\n    <div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\n      <button mat-icon-button td-menu-button tdLayoutToggle>\n        <mat-icon>menu</mat-icon>\n      </button>\n      <mat-icon class=\"mat-icon-logo cursor-pointer\" svgIcon=\"teradata\"></mat-icon>\n      <!-- <span class=\"cursor-pointer\">Covalent</span> -->\n      <span flex></span>\n      <!-- <a mat-icon-button matTooltip=\"Docs\" href=\"https://teradata.github.io/covalent/\" target=\"_blank\"><mat-icon>chrome_reader_mode</mat-icon></a>\n      <a mat-icon-button matTooltip=\"Github\" href=\"https://github.com/teradata/covalent\" target=\"_blank\"><mat-icon svgIcon=\"assets:github\"></mat-icon></a> -->\n    </div>\n    <img src=\"..\\assets\\keralafloods.jpg\" alt=\"image\" style=\"width:100%\">\n    <td-layout-card-over color=\"accent\" cardWidth=\"50\">\n      <mat-card-title>Contrubute to kerala</mat-card-title>\n      <mat-card-subtitle>Hi {{user}},Donate for kerala</mat-card-subtitle>\n      <mat-card-content>\n        <h1 *ngIf=\"check === undefined\">{{loding}}</h1>\n        <div *ngIf=\"user===undefined\">\n          <p>Please login</p>\n        </div>\n        <div *ngIf=\"check\">\n          <div *ngIf=\"user\">\n            <app-form></app-form>\n          </div>\n        </div>\n        <div *ngIf=\"check===false\">\n          <h3>You had already submitted. For any further queries contact us.</h3>\n        </div>\n      </mat-card-content>\n    </td-layout-card-over>\n  </td-layout-nav>\n</td-layout>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keralafundsservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keralafundsservice.service */ "./src/app/keralafundsservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(service) {
        this.service = service;
        this.loding = 'Loading ...';
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getuser();
    };
    MainComponent.prototype.validate = function () {
        var _this = this;
        this.service.validate().subscribe(function (result) {
            _this.loding = '';
            console.log(_this.check);
            if (result === 405) {
                _this.check = false;
            }
            else {
                _this.check = true;
            }
        });
    };
    MainComponent.prototype.getuser = function () {
        var _this = this;
        this.service.getuser().subscribe(function (result) {
            _this.user = result.name.substring(3);
            _this.email = _this.user + '@teradata.com';
            _this.validate();
        });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_keralafundsservice_service__WEBPACK_IMPORTED_MODULE_1__["KeralafundsserviceService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _covalent_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @covalent/core/common */ "./node_modules/@covalent/core/esm5/covalent-core-common.js");
/* harmony import */ var _covalent_core_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @covalent/core/search */ "./node_modules/@covalent/core/esm5/covalent-core-search.js");
/* harmony import */ var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @covalent/core/layout */ "./node_modules/@covalent/core/esm5/covalent-core-layout.js");
/* harmony import */ var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @covalent/core/dialogs */ "./node_modules/@covalent/core/esm5/covalent-core-dialogs.js");
/* harmony import */ var _covalent_core_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @covalent/core/media */ "./node_modules/@covalent/core/esm5/covalent-core-media.js");
/* harmony import */ var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @covalent/core/loading */ "./node_modules/@covalent/core/esm5/covalent-core-loading.js");
/* harmony import */ var _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @covalent/core/data-table */ "./node_modules/@covalent/core/esm5/covalent-core-data-table.js");
/* harmony import */ var _covalent_core_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @covalent/core/notifications */ "./node_modules/@covalent/core/esm5/covalent-core-notifications.js");
/* harmony import */ var _covalent_core_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @covalent/core/menu */ "./node_modules/@covalent/core/esm5/covalent-core-menu.js");
/* harmony import */ var _covalent_core_paging__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @covalent/core/paging */ "./node_modules/@covalent/core/esm5/covalent-core-paging.js");
/* harmony import */ var _covalent_core_steps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @covalent/core/steps */ "./node_modules/@covalent/core/esm5/covalent-core-steps.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_32__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var ANGULAR_MODULES = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
];
var MATERIAL_MODULES = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
];
var COVALENT_MODULES = [
    _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_11__["CovalentDataTableModule"], _covalent_core_media__WEBPACK_IMPORTED_MODULE_9__["CovalentMediaModule"], _covalent_core_loading__WEBPACK_IMPORTED_MODULE_10__["CovalentLoadingModule"],
    _covalent_core_notifications__WEBPACK_IMPORTED_MODULE_12__["CovalentNotificationsModule"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_7__["CovalentLayoutModule"], _covalent_core_menu__WEBPACK_IMPORTED_MODULE_13__["CovalentMenuModule"],
    _covalent_core_paging__WEBPACK_IMPORTED_MODULE_14__["CovalentPagingModule"], _covalent_core_search__WEBPACK_IMPORTED_MODULE_6__["CovalentSearchModule"], _covalent_core_steps__WEBPACK_IMPORTED_MODULE_15__["CovalentStepsModule"],
    _covalent_core_common__WEBPACK_IMPORTED_MODULE_5__["CovalentCommonModule"], _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_8__["CovalentDialogsModule"],
];
var CHART_MODULES = [
    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_32__["NgxChartsModule"],
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ANGULAR_MODULES,
                MATERIAL_MODULES,
                COVALENT_MODULES,
                CHART_MODULES,
            ],
            declarations: [],
            exports: [
                ANGULAR_MODULES,
                MATERIAL_MODULES,
                COVALENT_MODULES,
                CHART_MODULES,
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DC250042\Desktop\Kerala relife project\Single server app\keralafundproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map