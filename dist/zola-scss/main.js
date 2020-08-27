(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user/user.module": "./src/app/user/user.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, checkDirtyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDirtyState", function() { return checkDirtyState; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _products_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/index */ "./src/app/products/index.ts");
/* harmony import */ var _categories_shared_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/shared/category.service */ "./src/app/categories/shared/category.service.ts");
/* harmony import */ var _zola_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zola-app.component */ "./src/app/zola-app.component.ts");
/* harmony import */ var _nav_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/header.component */ "./src/app/nav/header.component.ts");
/* harmony import */ var _nav_user_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/user-navbar.component */ "./src/app/nav/user-navbar.component.ts");
/* harmony import */ var _errors_404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./errors/404.component */ "./src/app/errors/404.component.ts");
/* harmony import */ var _common_toastr_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/toastr.service */ "./src/app/common/toastr.service.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/auth.service */ "./src/app/user/auth.service.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_zola_app_component__WEBPACK_IMPORTED_MODULE_8__["ZolaAppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _user_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
        _products_index__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
        _common_toastr_service__WEBPACK_IMPORTED_MODULE_12__["ToastrService"],
        _products_index__WEBPACK_IMPORTED_MODULE_6__["ProductRouteActivator"],
        _products_index__WEBPACK_IMPORTED_MODULE_6__["ProductsListResolver"],
        _categories_shared_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
        { provide: 'canDeactivateCreateProduct', useValue: checkDirtyState },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_3__["UserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_13__["appRoutes"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_zola_app_component__WEBPACK_IMPORTED_MODULE_8__["ZolaAppComponent"],
        _nav_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _nav_user_navbar_component__WEBPACK_IMPORTED_MODULE_10__["UserNavbarComponent"],
        _products_index__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"],
        _products_index__WEBPACK_IMPORTED_MODULE_6__["ProductThumbnailGrid"],
        _products_index__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsComponent"],
        _products_index__WEBPACK_IMPORTED_MODULE_6__["CreateProductComponent"],
        _errors_404_component__WEBPACK_IMPORTED_MODULE_11__["Error404Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _user_user_module__WEBPACK_IMPORTED_MODULE_3__["UserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _user_user_module__WEBPACK_IMPORTED_MODULE_3__["UserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_13__["appRoutes"]),
                ],
                declarations: [
                    _zola_app_component__WEBPACK_IMPORTED_MODULE_8__["ZolaAppComponent"],
                    _nav_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _nav_user_navbar_component__WEBPACK_IMPORTED_MODULE_10__["UserNavbarComponent"],
                    _products_index__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"],
                    _products_index__WEBPACK_IMPORTED_MODULE_6__["ProductThumbnailGrid"],
                    _products_index__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsComponent"],
                    _products_index__WEBPACK_IMPORTED_MODULE_6__["CreateProductComponent"],
                    _errors_404_component__WEBPACK_IMPORTED_MODULE_11__["Error404Component"],
                ],
                providers: [
                    _user_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                    _products_index__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
                    _common_toastr_service__WEBPACK_IMPORTED_MODULE_12__["ToastrService"],
                    _products_index__WEBPACK_IMPORTED_MODULE_6__["ProductRouteActivator"],
                    _products_index__WEBPACK_IMPORTED_MODULE_6__["ProductsListResolver"],
                    _categories_shared_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
                    { provide: 'canDeactivateCreateProduct', useValue: checkDirtyState },
                ],
                bootstrap: [_zola_app_component__WEBPACK_IMPORTED_MODULE_8__["ZolaAppComponent"]],
            }]
    }], null, null); })();
function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm('You have not saved this product, do you really want to cancel?');
    }
    return true;
}


/***/ }),

/***/ "./src/app/categories/shared/category.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/categories/shared/category.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CategoryService {
    constructor() { }
    getCategories() {
        return categories;
    }
    getCategory(id) {
        return categories.find((el) => el._id === id);
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
const categories = [
    {
        _id: '5f2872371c89c65205fb3df5',
        name: 'women Shoes',
        createdAt: '2020-08-03T20:23:19.294Z',
        updatedAt: '2020-08-12T00:19:32.903Z',
        image: 'category-5f2872371c89c65205fb3df5-1597191572871.jpeg',
        id: '5f2872371c89c65205fb3df5',
    },
    {
        _id: '5f28722d1c89c65205fb3df4',
        name: 'Men Shoes',
        createdAt: '2020-08-03T20:23:09.155Z',
        updatedAt: '2020-08-12T00:18:01.321Z',
        image: 'category-5f28722d1c89c65205fb3df4-1597191481287.jpeg',
        id: '5f28722d1c89c65205fb3df4',
    },
    {
        _id: '5f2872091c89c65205fb3df3',
        name: 'Men Bags',
        createdAt: '2020-08-03T20:22:33.519Z',
        updatedAt: '2020-08-12T00:16:42.632Z',
        image: 'category-5f2872091c89c65205fb3df3-1597191402588.jpeg',
        id: '5f2872091c89c65205fb3df3',
    },
    {
        _id: '5f2872031c89c65205fb3df2',
        name: 'Womens bag',
        createdAt: '2020-08-03T20:22:27.526Z',
        updatedAt: '2020-08-11T02:02:58.298Z',
        image: 'category-5f2872031c89c65205fb3df2-1597111377957.jpeg',
        id: '5f2872031c89c65205fb3df2',
    },
    {
        _id: '5f2871f61c89c65205fb3df1',
        name: 'Children Bags',
        createdAt: '2020-08-03T20:22:14.170Z',
        updatedAt: '2020-08-12T00:15:59.319Z',
        image: 'category-5f2871f61c89c65205fb3df1-1597191359295.jpeg',
        id: '5f2871f61c89c65205fb3df1',
    },
    {
        _id: '5f2871e31c89c65205fb3df0',
        name: 'Travel Bags',
        createdAt: '2020-08-03T20:21:55.951Z',
        updatedAt: '2020-08-12T00:14:24.483Z',
        image: 'category-5f2871e31c89c65205fb3df0-1597191264423.jpeg',
        id: '5f2871e31c89c65205fb3df0',
    },
];


/***/ }),

/***/ "./src/app/common/toastr.service.ts":
/*!******************************************!*\
  !*** ./src/app/common/toastr.service.ts ***!
  \******************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ToastrService {
    success(message, title) {
        toastr.success(message, title);
    }
    info(message, title) {
        toastr.info(message, title);
    }
    warning(message, title) {
        toastr.warning(message, title);
    }
    error(message, title) {
        toastr.error(message, title);
    }
}
ToastrService.ɵfac = function ToastrService_Factory(t) { return new (t || ToastrService)(); };
ToastrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastrService, factory: ToastrService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/errors/404.component.ts":
/*!*****************************************!*\
  !*** ./src/app/errors/404.component.ts ***!
  \*****************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Error404Component {
    constructor() { }
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(); };
Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["ng-component"]], decls: 2, vars: 0, consts: [[1, "errorMessage"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404'd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".errorMessage[_ngcontent-%COMP%] {\n        margin-top: 150px;\n        font-size: 17rem;\n        text-align: center;\n        height: 70vh;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: ` <h1 class="errorMessage">404'd</h1> `,
                styles: [
                    `
      .errorMessage {
        margin-top: 150px;
        font-size: 17rem;
        text-align: center;
        height: 70vh;
      }
    `,
                ],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav/header.component.ts":
/*!*****************************************!*\
  !*** ./src/app/nav/header.component.ts ***!
  \*****************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = function () { return ["/products"]; };
class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 2, consts: [[1, "header"], [1, "brand", 3, "routerLink"], ["src", "assets/img/logo.jpg", "alt", "Zola Logo", 1, "logo"], [1, "brand-name"], ["action", "#", 1, "search"], ["type", "text", "placeholder", "Search Products", 1, "search__input"], [1, "search__button"], [1, "search__icon"], [0, "xlink", "href", "assets/img/sprite.svg#icon-search1"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Zola");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  height: 5rem;\n  width: 100vw;\n  background-color: var(--color-white);\n  justify-content: space-between;\n  align-items: center;\n  z-index: 2;\n}\n\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  width: 11rem;\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.brand[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.brand[_ngcontent-%COMP%]:active {\n  transform: translateY(-3px);\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  padding-left: 2rem;\n}\n\n.brand-name[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: 2rem;\n  font-weight: 600;\n  font-style: italic;\n}\n\n.search[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 70%;\n  margin-right: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.search__input[_ngcontent-%COMP%] {\n  background-color: var(--color-tertiary);\n  border: none;\n  height: 3.5rem;\n  width: 90%;\n  padding: 0.5rem 3.2rem 0.5rem 1.5rem;\n  margin: -3rem;\n  border-radius: 1rem;\n  transition: all 0.3s;\n}\n\n.search__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  width: 100%;\n}\n\n.search__button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: var(--color-tertiary);\n}\n\n.search__button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background-color: var(--color-tertiary);\n}\n\n.search__button[_ngcontent-%COMP%]:active {\n  transform: translateY(-3px);\n  background-color: var(--color-tertiary);\n}\n\n.search__icon[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFJRTtFQUNFLGFBQUE7QUFGSjs7QUFJRTtFQUNFLDJCQUFBO0FBRko7O0FBTUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFORjs7QUFRRTtFQUNFLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQU5KOztBQVFJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFOTjs7QUFVRTtFQUNFLFlBQUE7RUFDQSx1Q0FBQTtBQVJKOztBQVVJO0VBQ0UsYUFBQTtFQUNBLHVDQUFBO0FBUk47O0FBV0k7RUFDRSwyQkFBQTtFQUNBLHVDQUFBO0FBVE47O0FBYUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVhKIiwiZmlsZSI6InNyYy9hcHAvbmF2L2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNXJlbTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBMb2dvXHJcblxyXG4uYnJhbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDExcmVtO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uYnJhbmQtbmFtZSB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBTZXJhY2hcclxuLnNlYXJjaCB7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGZsZXgtYmFzaXM6IDcwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJl9faW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDMuMnJlbSAwLjVyZW0gMS41cmVtO1xyXG4gICAgbWFyZ2luOiAtM3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/nav/user-navbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav/user-navbar.component.ts ***!
  \**********************************************/
/*! exports provided: UserNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNavbarComponent", function() { return UserNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function () { return ["/user/profile"]; };
function UserNavbarComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("welcome ", ctx_r0.auth.currentUser.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/img/users/" + ctx_r0.auth.currentUser.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function () { return ["/user/login"]; };
function UserNavbarComponent_h1_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " login / Sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/products"]; };
const _c3 = function () { return { exact: true }; };
class UserNavbarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    toggleAccount() {
        let element = document.querySelector('.account-options');
        // console.log(element.style);
        element.classList.toggle('hide');
    }
}
UserNavbarComponent.ɵfac = function UserNavbarComponent_Factory(t) { return new (t || UserNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
UserNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserNavbarComponent, selectors: [["user-navbar"]], decls: 29, vars: 6, consts: [[1, "user-nav-2"], ["routerLinkActive", "active", "href", "#", 1, "user-nav-2__link", 3, "routerLink", "routerLinkActiveOptions"], [1, "user-nav-2__icon"], [0, "xlink", "href", "/assets/img/sprite.svg#icon-home"], [1, "user-nav-2__name"], ["href", "#", 1, "user-nav-2__link"], [0, "xlink", "href", "/assets/img/sprite.svg#icon-list"], [0, "xlink", "href", "/assets/img/sprite.svg#icon-shopping-cart"], [0, "xlink", "href", "/assets/img/sprite.svg#icon-shopping-bag1"], [1, "user-nav-2__link", 3, "click"], [0, "xlink", "href", "/assets/img/sprite.svg#icon-person_outline"], [1, "account-options", "hide", 3, "click"], ["class", "user", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 1, "user", 3, "routerLink"], ["alt", "User photo", 1, "user__photo", 3, "src"], ["routerLinkActive", "active", 3, "routerLink"]], template: function UserNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "use", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "use", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserNavbarComponent_Template_div_click_21_listener() { return ctx.toggleAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "use", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserNavbarComponent_Template_section_click_26_listener() { return ctx.toggleAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserNavbarComponent_div_27_Template, 4, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserNavbarComponent_h1_28_Template, 2, 2, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".user-nav-2[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  height: 6rem;\n  width: 100vw;\n  background-color: var(--color-white);\n  display: flex;\n  align-items: center;\n}\n.user-nav-2__link[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.5rem;\n  color: var(--color-text-dark);\n}\n.user-nav-2__link[_ngcontent-%COMP%]:link, .user-nav-2__link[_ngcontent-%COMP%]:active, .user-nav-2__link[_ngcontent-%COMP%]:hover {\n  color: var(--color-text-dark);\n  text-decoration: none;\n}\n.user-nav-2__link[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-tertiary);\n}\n.user-nav-2__link[_ngcontent-%COMP%]:active {\n  transform: translateY(-3px);\n}\n.user-nav-2__icon[_ngcontent-%COMP%] {\n  height: 4rem;\n  width: 4rem;\n  fill: var(--color-text-dark);\n}\n.user-nav-2__name[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n.active[_ngcontent-%COMP%] {\n  border: none;\n  background-color: var(--color-primary);\n}\n.active[_ngcontent-%COMP%]:focus {\n  border: none;\n  background-color: var(--color-primary);\n}\n.account-options[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 60%;\n  height: 40rem;\n  background-color: var(--color-tertiary);\n  position: fixed;\n  right: 0;\n  bottom: 5.5rem;\n  padding: 2rem;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.user[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.user__photo[_ngcontent-%COMP%] {\n  height: 6rem;\n  border-radius: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L3VzZXItbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBQ0o7QUFDSTtFQUdFLDZCQUFBO0VBQ0EscUJBQUE7QUFETjtBQUlJO0VBQ0UsdUNBQUE7QUFGTjtBQUtJO0VBQ0UsMkJBQUE7QUFITjtBQU9FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQUxKO0FBUUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFVQTtFQUNFLFlBQUE7RUFDQSxzQ0FBQTtBQVBGO0FBU0U7RUFDRSxZQUFBO0VBQ0Esc0NBQUE7QUFQSjtBQVdBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQVJGO0FBV0E7RUFDRSxhQUFBO0FBUkY7QUFXQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVJGO0FBVUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFSSiIsImZpbGUiOiJzcmMvYXBwL25hdi91c2VyLW5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLW5hdi0yIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiA2cmVtO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmX19saW5rIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1kYXJrKTtcclxuXHJcbiAgICAmOmxpbmssXHJcbiAgICAmOmFjdGl2ZSxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1kYXJrKTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19pY29uIHtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgZmlsbDogdmFyKC0tY29sb3ItdGV4dC1kYXJrKTtcclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxufVxyXG5cclxuLmFjY291bnQtb3B0aW9ucyB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDQwcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiA1LjVyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAmX19waG90byB7XHJcbiAgICBoZWlnaHQ6IDZyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'user-navbar',
                templateUrl: './user-navbar.component.html',
                styleUrls: ['./user-navbar.component.scss'],
            }]
    }], function () { return [{ type: _user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/products/create-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/create-product.component.ts ***!
  \******************************************************/
/*! exports provided: CreateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function() { return CreateProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categories_shared_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../categories/shared/category.service */ "./src/app/categories/shared/category.service.ts");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["imageCover"];
const _c1 = ["images"];
const _c2 = ["colourImage"];
function CreateProductComponent_em_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProductComponent_em_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProductComponent_em_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProductComponent_em_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProductComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", category_r18._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r18.name);
} }
function CreateProductComponent_em_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProductComponent_em_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Must be a png or jpg url");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProductComponent_em_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProductComponent_em_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Must be a png or jpg url");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProductComponent_em_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProductComponent_em_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProductComponent_em_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProductComponent_em_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProductComponent_em_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Must be a png or jpg url");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { "error": a0 }; };
class CreateProductComponent {
    constructor(router, categoryService, productService) {
        this.router = router;
        this.categoryService = categoryService;
        this.productService = productService;
        this.isDirty = true;
    }
    ngOnInit() {
        this.categories = this.categoryService.getCategories();
    }
    createProduct(productData) {
        let formData = new FormData();
        const appendImage = (imageArray, name) => {
            Object.keys(imageArray).forEach((el) => {
                formData.append(name, imageArray[el]);
            });
        };
        formData.append('name', productData.name);
        formData.append('description', productData.description);
        formData.append('category', productData.category);
        formData.append('priceDiscountPercent', productData.priceDiscountPercent);
        formData.append('tag', productData.tag);
        formData.append('shipping', productData.shipping);
        formData.append('colour[colour]', productData.colour.colourName);
        formData.append('colour[quantity]', productData.colour.colourQuantity);
        formData.append('colour[price]', productData.colour.colourPrice);
        appendImage(this.imageCover.nativeElement.files, 'imageCover');
        appendImage(this.images.nativeElement.files, 'images');
        appendImage(this.colourImage.nativeElement.files, 'colourImage');
        this.productService.createProduct(formData);
        return true;
    }
    cancel() {
        this.router.navigate(['/products']);
    }
}
CreateProductComponent.ɵfac = function CreateProductComponent_Factory(t) { return new (t || CreateProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_categories_shared_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"])); };
CreateProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateProductComponent, selectors: [["ng-component"]], viewQuery: function CreateProductComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageCover = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.images = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.colourImage = _t.first);
    } }, decls: 82, vars: 46, consts: [[1, "main"], [1, "create-product--section"], ["autocomplete", "off", 1, "form--create-product", 3, "ngSubmit"], ["newProductForm", "ngForm"], [1, "form-group", 3, "ngClass"], ["for", "productName"], [4, "ngIf"], ["name", "name", "required", "", "id", "name", "type", "text", "placeholder", "Name of your product...", 1, "form-control", 3, "ngModel"], ["for", "productDescription"], ["name", "description", "required", "", "id", "description", "type", "text", "placeholder", "Description of your product...", 1, "form-control", 3, "ngModel"], ["for", "productPriceDiscountPercent"], ["name", "priceDiscountPercent", "required", "", "id", "priceDiscountPercent", "type", "number", "placeholder", "Percent price discount of your product...", 1, "form-control", 3, "ngModel"], ["for", "productTag"], ["name", "tag", "required", "", "id", "tag", "type", "text", "placeholder", "Tag of your product...", 1, "form-control", 3, "ngModel"], [1, "form-group"], ["for", "productShipping"], ["name", "shipping", "id", "shipping", 3, "ngModel"], [3, "ngValue"], ["value", "false"], ["for", "productCategory"], ["name", "category", "id", "category", 3, "ngModel"], [3, "selected", "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "imageCover"], ["name", "imageCover", "required", "", "accept", "image/*", "pattern", ".*.(png|jpg)", "id", "imageCover", "type", "file", "placeholder", "Upload cover image...", 1, "form-control"], ["imageCover", ""], ["for", "images"], ["name", "images", "multiple", "multiple", "required", "", "accept", "image/*", "pattern", ".*.(png|jpg)", "id", "images", "type", "file", "placeholder", "Upload image...", 1, "form-control"], ["images", ""], ["ngModelGroup", "colour"], ["for", "productcolourName"], ["name", "colourName", "required", "", "id", "colourName", "type", "text", "placeholder", "colour of your product...", 1, "form-control", 3, "ngModel"], ["for", "productcolourQuantity"], ["name", "colourQuantity", "required", "", "id", "colourQuantity", "type", "text", "placeholder", "Colour quantity of your product...", 1, "form-control", 3, "ngModel"], ["for", "productcolourPrice"], ["name", "colourPrice", "required", "", "id", "colourPrice", "type", "text", "placeholder", "Colour Price of your product...", 1, "form-control", 3, "ngModel"], ["for", "colourImage"], ["name", "colourImage", "required", "", "accept", "image/*", "pattern", ".*.(png|jpg)", "id", "colourImage", "type", "file", "placeholder", "Upload colour image...", 1, "form-control"], ["colourImage", ""], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function CreateProductComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateProductComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.createProduct(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateProductComponent_em_7_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateProductComponent_Template_input_ngModel_8_listener() { return ctx.newProduct.name; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateProductComponent_em_12_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateProductComponent_Template_input_ngModel_13_listener() { return ctx.newProduct.description; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Product priceDiscountPercent:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateProductComponent_em_17_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateProductComponent_Template_input_ngModel_18_listener() { return ctx.newProduct.priceDiscountPercent; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product tag:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreateProductComponent_em_22_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateProductComponent_Template_input_ngModel_23_listener() { return ctx.newProduct.tag; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Shipping:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateProductComponent_Template_select_ngModel_27_listener() { return ctx.newProduct.shipping; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "True");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "False");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateProductComponent_Template_select_ngModel_35_listener() { return ctx.newProduct.category; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Select Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CreateProductComponent_option_38_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cover Image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CreateProductComponent_em_42_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CreateProductComponent_em_43_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Images:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CreateProductComponent_em_50_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CreateProductComponent_em_51_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "fieldset", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Product colour:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CreateProductComponent_em_59_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateProductComponent_Template_input_ngModel_60_listener() { return ctx.newProduct.colourName; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Product colour quantity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, CreateProductComponent_em_64_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateProductComponent_Template_input_ngModel_65_listener() { return ctx.newProduct.colourQuantity; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Product colour Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, CreateProductComponent_em_69_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateProductComponent_Template_input_ngModel_70_listener() { return ctx.newProduct.colourPrice; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Colour Image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, CreateProductComponent_em_74_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, CreateProductComponent_em_75_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Create Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateProductComponent_Template_button_click_80_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c3, (_r0.controls.name == null ? null : _r0.controls.name.invalid) && (_r0.controls.name == null ? null : _r0.controls.name.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.name == null ? null : _r0.controls.name.invalid) && (_r0.controls.name == null ? null : _r0.controls.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c3, (_r0.controls.description == null ? null : _r0.controls.description.invalid) && (_r0.controls.description == null ? null : _r0.controls.description.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.description == null ? null : _r0.controls.description.invalid) && (_r0.controls.description == null ? null : _r0.controls.description.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c3, (_r0.controls.priceDiscountPercent == null ? null : _r0.controls.priceDiscountPercent.invalid) && (_r0.controls.priceDiscountPercent == null ? null : _r0.controls.priceDiscountPercent.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.priceDiscountPercent == null ? null : _r0.controls.priceDiscountPercent.invalid) && (_r0.controls.priceDiscountPercent == null ? null : _r0.controls.priceDiscountPercent.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c3, (_r0.controls.tag == null ? null : _r0.controls.tag.invalid) && (_r0.controls.tag == null ? null : _r0.controls.tag.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.tag == null ? null : _r0.controls.tag.invalid) && (_r0.controls.tag == null ? null : _r0.controls.tag.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", _r0.value.category === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c3, (_r0.controls.imageCover == null ? null : _r0.controls.imageCover.invalid) && (_r0.controls.imageCover == null ? null : _r0.controls.imageCover.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.imageCover == null ? null : _r0.controls.imageCover.invalid) && (_r0.controls.imageCover == null ? null : _r0.controls.imageCover.touched) && (_r0.controls.imageCover == null ? null : _r0.controls.imageCover.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.imageCover == null ? null : _r0.controls.imageCover.invalid) && (_r0.controls.imageCover == null ? null : _r0.controls.imageCover.touched) && (_r0.controls.imageCover == null ? null : _r0.controls.imageCover.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c3, (_r0.controls.images == null ? null : _r0.controls.images.invalid) && (_r0.controls.images == null ? null : _r0.controls.images.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.images == null ? null : _r0.controls.images.invalid) && (_r0.controls.images == null ? null : _r0.controls.images.touched) && (_r0.controls.images == null ? null : _r0.controls.images.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.images == null ? null : _r0.controls.images.invalid) && (_r0.controls.images == null ? null : _r0.controls.images.touched) && (_r0.controls.images == null ? null : _r0.controls.images.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c3, (_r0.controls.colourName == null ? null : _r0.controls.colourName.invalid) && (_r0.controls.colourName == null ? null : _r0.controls.colourName.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.colourName == null ? null : _r0.controls.colourName.invalid) && (_r0.controls.colourName == null ? null : _r0.controls.colourName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c3, (_r0.controls.colourQuantity == null ? null : _r0.controls.colourQuantity.invalid) && (_r0.controls.colourQuantity == null ? null : _r0.controls.colourQuantity.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.colourQuantity == null ? null : _r0.controls.colourQuantity.invalid) && (_r0.controls.colourQuantity == null ? null : _r0.controls.colourQuantity.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c3, (_r0.controls.colourPrice == null ? null : _r0.controls.colourPrice.invalid) && (_r0.controls.colourPrice == null ? null : _r0.controls.colourPrice.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.colourPrice == null ? null : _r0.controls.colourPrice.invalid) && (_r0.controls.colourPrice == null ? null : _r0.controls.colourPrice.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c3, (_r0.controls.colourImage == null ? null : _r0.controls.colourImage.invalid) && (_r0.controls.colourImage == null ? null : _r0.controls.colourImage.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.colourImage == null ? null : _r0.controls.colourImage.invalid) && (_r0.controls.colourImage == null ? null : _r0.controls.colourImage.touched) && (_r0.controls.colourImage == null ? null : _r0.controls.colourImage.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.colourImage == null ? null : _r0.controls.colourImage.invalid) && (_r0.controls.colourImage == null ? null : _r0.controls.colourImage.touched) && (_r0.controls.colourImage == null ? null : _r0.controls.colourImage.errors.pattern));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModelGroup"]], styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n}\n\n.create-product--section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  top: 50%;\n  left: 50%;\n  padding: 1rem 0;\n  transform: translateX(-50%);\n  background-color: #d8e9f9;\n}\n\n.form--create-product[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 1rem auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\n.form-group[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  align-self: center;\n  font-size: 1.5rem;\n  color: var(--color-secondary);\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 4rem;\n  outline: none;\n  border: none;\n  border-bottom: solid blue 2px;\n  flex-basis: 100%;\n  flex-shrink: 0;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n\n.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #e3c3c5;\n}\n\n.error[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #999;\n}\n\n.error[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #999;\n}\n\n.error[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #999;\n}\n\n.error[_ngcontent-%COMP%]:-ms-fullscreen {\n  color: #999;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 30rem;\n  height: 4rem;\n  margin: 3rem 0;\n}\n\n.forgor--password[_ngcontent-%COMP%], .signup--link[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvY3JlYXRlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUVBLDJCQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUVFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUhGOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBSko7O0FBT0U7O0VBRUUsaUJBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVFJOztFQUNFLFlBQUE7QUFMTjs7QUFXRTtFQUNFLHlCQUFBO0FBUko7O0FBV0U7RUFDRSxXQUFBO0FBVEo7O0FBV0U7RUFDRSxXQUFBO0FBVEo7O0FBV0U7RUFDRSxXQUFBO0FBVEo7O0FBV0U7RUFDRSxXQUFBO0FBVEo7O0FBYUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFWRjs7QUFhQTs7RUFFRSxpQkFBQTtFQUNBLDZCQUFBO0FBVkYiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jcmVhdGUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIC8vICAgaGVpZ2h0OiA4NXZoO1xyXG59XHJcblxyXG4uY3JlYXRlLXByb2R1Y3QtLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogOTAlO1xyXG4gIC8vICAgaGVpZ2h0OiA3MHJlbTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIC8vICAgaGVpZ2h0OiAxMDB2aDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3I6ICMxZTc2Y2UsICRhbW91bnQ6IDQ1KTtcclxufVxyXG5cclxuLmZvcm0tLWNyZWF0ZS1wcm9kdWN0IHtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgZW0ge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICB9XHJcblxyXG4gIGlucHV0LFxyXG4gIHNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGJsdWUgMnB4O1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAgIG9wdGlvbiB7XHJcbiAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzYzNjNTtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcbiAgJjotbXMtZnVsbHNjcmVlbiB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAzMHJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbn1cclxuXHJcbi5mb3Jnb3ItLXBhc3N3b3JkLFxyXG4uc2lnbnVwLS1saW5rIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './create-product.component.html',
                styleUrls: ['./create-product.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _categories_shared_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }, { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }]; }, { imageCover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imageCover', { static: false }]
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['images', { static: false }]
        }], colourImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['colourImage', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/products/index.ts":
/*!***********************************!*\
  !*** ./src/app/products/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_list_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-list-resolver.service */ "./src/app/products/products-list-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsListResolver", function() { return _products_list_resolver_service__WEBPACK_IMPORTED_MODULE_0__["ProductsListResolver"]; });

/* harmony import */ var _product_thumbnail_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-thumbnail-grid.component */ "./src/app/products/product-thumbnail-grid.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductThumbnailGrid", function() { return _product_thumbnail_grid_component__WEBPACK_IMPORTED_MODULE_1__["ProductThumbnailGrid"]; });

/* harmony import */ var _create_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-product.component */ "./src/app/products/create-product.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function() { return _create_product_component__WEBPACK_IMPORTED_MODULE_2__["CreateProductComponent"]; });

/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return _product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]; });

/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/index */ "./src/app/products/shared/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _shared_index__WEBPACK_IMPORTED_MODULE_4__) if(["ProductsListResolver","ProductThumbnailGrid","CreateProductComponent","ProductListComponent","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _shared_index__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _product_details_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details/index */ "./src/app/products/product-details/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return _product_details_index__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductRouteActivator", function() { return _product_details_index__WEBPACK_IMPORTED_MODULE_5__["ProductRouteActivator"]; });









/***/ }),

/***/ "./src/app/products/product-details/index.ts":
/*!***************************************************!*\
  !*** ./src/app/products/product-details/index.ts ***!
  \***************************************************/
/*! exports provided: ProductDetailsComponent, ProductRouteActivator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details.component */ "./src/app/products/product-details/product-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return _product_details_component__WEBPACK_IMPORTED_MODULE_0__["ProductDetailsComponent"]; });

/* harmony import */ var _product_route_activator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-route-activator.service */ "./src/app/products/product-details/product-route-activator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductRouteActivator", function() { return _product_route_activator_service__WEBPACK_IMPORTED_MODULE_1__["ProductRouteActivator"]; });





/***/ }),

/***/ "./src/app/products/product-details/product-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-details/product-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_toastr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/toastr.service */ "./src/app/common/toastr.service.ts");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_thumbnail_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-thumbnail-grid.component */ "./src/app/products/product-thumbnail-grid.component.ts");







function ProductDetailsComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- $ ", ctx_r0.product.discountedHighPrice, "");
} }
function ProductDetailsComponent_h4_9_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- $ ", ctx_r5.product.highPrice, "");
} }
function ProductDetailsComponent_h4_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailsComponent_h4_9_span_3_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx_r1.product.lowPrice, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.product.discountedHighPrice > ctx_r1.product.discountedLowPrice);
} }
function ProductDetailsComponent_p_12_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - $ ", (ctx_r6.product.highPrice * (ctx_r6.product.priceDiscountPercent / 100)).toFixed(2), " ");
} }
function ProductDetailsComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailsComponent_p_12_span_3_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", (ctx_r2.product.lowPrice * (ctx_r2.product.priceDiscountPercent / 100)).toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.product.discountedHighPrice > ctx_r2.product.discountedLowPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.product.priceDiscountPercent, "% ");
} }
function ProductDetailsComponent_img_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const colourImage_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/img/products/75x75_" + colourImage_r7.colourImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", colourImage_r7.colour);
} }
function ProductDetailsComponent_section_34_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "product-thumbnail-grid", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_section_34_Template_product_thumbnail_grid_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const prod_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.handleProductClick(prod_r8.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", prod_r8);
} }
class ProductDetailsComponent {
    constructor(toastrService, productService, route) {
        this.toastrService = toastrService;
        this.productService = productService;
        this.route = route;
    }
    ngOnInit() {
        this.product = this.productService.getProduct(this.route.snapshot.params['id']);
        this.products = this.route.snapshot.data['products'];
    }
    handleProductClick(productName) {
        this.toastrService.success(productName);
        // alert(productName);
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_toastr_service__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["product-details"]], decls: 35, vars: 9, consts: [[1, "product--details__container"], [1, "product--details__hero"], ["alt", "Product Image", 1, "product--details__image", 3, "src"], [1, "product__info"], [1, "product__detail"], [1, "product__price"], [4, "ngIf"], ["class", "product__old--price", 4, "ngIf"], [1, "product__name"], ["class", "product__discount", 4, "ngIf"], [1, "product__stats-box"], [1, "product__stats__icon"], [0, "xlink", "href", "/assets/img/sprite.svg#icon-star"], [1, "product__stats--value"], [1, "product--colour"], [1, "product--colour__images"], ["class", "product--colour__image", 3, "src", "alt", 4, "ngFor", "ngForOf"], [1, "product-list"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product__old--price"], [1, "product__discount"], ["clas", "product__discount--price"], ["clas", "product__discount--price", 4, "ngIf"], ["clas", "product__discount--percentage"], [1, "product--colour__image", 3, "src", "alt"], [1, "product-card"], [3, "product", "click"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figcaption", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductDetailsComponent_span_8_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductDetailsComponent_h4_9_Template, 4, 2, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductDetailsComponent_p_12_Template, 6, 3, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Colours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProductDetailsComponent_img_30_Template, 1, 2, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Products You May Love");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProductDetailsComponent_section_34_Template, 2, 1, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/img/products/800x800_" + ctx.product.imageCover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.product.discountedLowPrice, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.discountedHighPrice > ctx.product.discountedLowPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.priceDiscountPercent > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.priceDiscountPercent > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.ratingsAverage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product.colour);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _product_thumbnail_grid_component__WEBPACK_IMPORTED_MODULE_5__["ProductThumbnailGrid"]], styles: [".offer__slider[_ngcontent-%COMP%] {\n  width: 96%;\n  margin: 3% 2%;\n}\n.offer__slider--image[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 1.2rem;\n}\n.product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.product-card[_ngcontent-%COMP%] {\n  flex-basis: 48%;\n  flex-shrink: 0;\n  background-color: var(--color-product-card);\n  border-radius: 1rem;\n  margin: 1rem 1%;\n}\n@media (min-width: 37.5em) {\n  .product-card[_ngcontent-%COMP%] {\n    flex-basis: 24%;\n    margin: 1rem 0.5%;\n  }\n}\n@media (min-width: 56.25em) {\n  .product-card[_ngcontent-%COMP%] {\n    flex-basis: 15.6%;\n    margin: 1rem 0.5%;\n  }\n}\n@media (min-width: 75em) {\n  .product-card[_ngcontent-%COMP%] {\n    flex-basis: 11.5%;\n    margin: 1rem 0.5%;\n  }\n}\n.product--details__container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.product--details__hero[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.product--details__image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.product__stats__icon[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  width: 1.5rem;\n  fill: gold;\n}\n.product--colour[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1rem 0;\n}\n.product--colour__images[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n  background-color: var(--color-gray-light);\n}\n.product--colour__image[_ngcontent-%COMP%] {\n  height: 6rem;\n  margin: 0.5rem;\n  border: solid 1.5px var(--color-gray-dark);\n  padding: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlc19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FDREY7QURHRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQ0RKO0FES0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0ZGO0FES0E7RUFDRSxlQUFBO0VBaUJBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2xCRjtBQ1pJO0VGU0o7SUFJSSxlQUFBO0lBQ0EsaUJBQUE7RUNHRjtBQUNGO0FDWkk7RUZHSjtJQVNJLGlCQUFBO0lBQ0EsaUJBQUE7RUNJRjtBQUNGO0FDWkk7RUZISjtJQWNJLGlCQUFBO0lBQ0EsaUJBQUE7RUNLRjtBQUNGO0FBekJFO0VBQ0UsV0FBQTtBQTRCSjtBQXpCRTtFQUNFLFdBQUE7QUEyQko7QUF6QkU7RUFDRSxXQUFBO0FBMkJKO0FBSUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFGSjtBQUtFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFISjtBQUtJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQUhOO0FBS0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtBQUhOIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzX21peGluc1wiO1xyXG5cclxuLm9mZmVyX19zbGlkZXIge1xyXG4gIHdpZHRoOiA5NiU7XHJcbiAgbWFyZ2luOiAzJSAyJTtcclxuXHJcbiAgJi0taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZHVjdC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnByb2R1Y3QtY2FyZCB7XHJcbiAgZmxleC1iYXNpczogNDglO1xyXG5cclxuICBAaW5jbHVkZSByZXNwb25kKHRhYi1wb3J0KSB7XHJcbiAgICBmbGV4LWJhc2lzOiAyNCU7XHJcbiAgICBtYXJnaW46IDFyZW0gMC41JTtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIHJlc3BvbmQodGFiLWxhbmQpIHtcclxuICAgIGZsZXgtYmFzaXM6IDE1LjYlO1xyXG4gICAgbWFyZ2luOiAxcmVtIDAuNSU7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSByZXNwb25kKGRlc2t0b3ApIHtcclxuICAgIGZsZXgtYmFzaXM6IDExLjUlO1xyXG4gICAgbWFyZ2luOiAxcmVtIDAuNSU7XHJcbiAgfVxyXG5cclxuICBmbGV4LXNocmluazogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcm9kdWN0LWNhcmQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgbWFyZ2luOiAxcmVtIDElO1xyXG59XHJcbiIsIi5vZmZlcl9fc2xpZGVyIHtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luOiAzJSAyJTtcbn1cbi5vZmZlcl9fc2xpZGVyLS1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxLjJyZW07XG59XG5cbi5wcm9kdWN0LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wcm9kdWN0LWNhcmQge1xuICBmbGV4LWJhc2lzOiA0OCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcm9kdWN0LWNhcmQpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBtYXJnaW46IDFyZW0gMSU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzcuNWVtKSB7XG4gIC5wcm9kdWN0LWNhcmQge1xuICAgIGZsZXgtYmFzaXM6IDI0JTtcbiAgICBtYXJnaW46IDFyZW0gMC41JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU2LjI1ZW0pIHtcbiAgLnByb2R1Y3QtY2FyZCB7XG4gICAgZmxleC1iYXNpczogMTUuNiU7XG4gICAgbWFyZ2luOiAxcmVtIDAuNSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9kdWN0LWNhcmQge1xuICAgIGZsZXgtYmFzaXM6IDExLjUlO1xuICAgIG1hcmdpbjogMXJlbSAwLjUlO1xuICB9XG59XG5cbi5wcm9kdWN0LS1kZXRhaWxzX19jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LS1kZXRhaWxzX19oZXJvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdC0tZGV0YWlsc19faW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0X19zdGF0c19faWNvbiB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xuICBmaWxsOiBnb2xkO1xufVxuLnByb2R1Y3QtLWNvbG91ciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cbi5wcm9kdWN0LS1jb2xvdXJfX2ltYWdlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xufVxuLnByb2R1Y3QtLWNvbG91cl9faW1hZ2Uge1xuICBoZWlnaHQ6IDZyZW07XG4gIG1hcmdpbjogMC41cmVtO1xuICBib3JkZXI6IHNvbGlkIDEuNXB4IHZhcigtLWNvbG9yLWdyYXktZGFyayk7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbn0iLCIvLyBAbWl4aW4gcmVzcG9uZC10YWJsZXQge1xyXG4vLyAgIEBtZWRpYSAobWluOiA2MDBweCkge1xyXG4vLyAgICAgQGNvbnRlbnQ7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5AbWl4aW4gcmVzcG9uZCgkYnJlYWtwb2ludCkge1xyXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB0YWItcG9ydCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzcuNWVtKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfSAvLzYwMHB4XHJcbiAgfVxyXG5cclxuICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLWxhbmQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU2LjI1ZW0pIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9IC8vOTAwcHhcclxuICB9XHJcblxyXG4gIEBpZiAkYnJlYWtwb2ludCA9PSBkZXNrdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfSAvLzEyMDBweFxyXG4gIH1cclxuXHJcbiAgQGlmICRicmVha3BvaW50ID09IGJpZy1kZXNrdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTIuNWVtKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfSAvLzE4MDBweFxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['product-details.component.scss'],
            }]
    }], function () { return [{ type: _common_toastr_service__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }, { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/products/product-details/product-route-activator.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/products/product-details/product-route-activator.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductRouteActivator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRouteActivator", function() { return ProductRouteActivator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ProductRouteActivator {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    canActivate(route) {
        const productExists = !!this.productService.getProduct(route.params['id']);
        if (!productExists) {
            this.router.navigate(['/404']);
        }
        return productExists;
    }
}
ProductRouteActivator.ɵfac = function ProductRouteActivator_Factory(t) { return new (t || ProductRouteActivator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProductRouteActivator.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductRouteActivator, factory: ProductRouteActivator.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRouteActivator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/products/product-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-list.component.ts ***!
  \****************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _common_toastr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/toastr.service */ "./src/app/common/toastr.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_thumbnail_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-thumbnail-grid.component */ "./src/app/products/product-thumbnail-grid.component.ts");







function ProductListComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "product-thumbnail-grid", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_section_5_Template_product_thumbnail_grid_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const prod_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.handleProductClick(prod_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", prod_r1);
} }
class ProductListComponent {
    constructor(productService, toastrService, route) {
        this.productService = productService;
        this.toastrService = toastrService;
        this.route = route;
    }
    ngOnInit() {
        this.products = this.route.snapshot.data['products'];
        // this.productService.getProducts().subscribe((products) => {
        //   this.products = products;
        // });
    }
    handleProductClick(productName) {
        this.toastrService.success(productName);
        // alert(productName);
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_toastr_service__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["ng-component"]], decls: 6, vars: 2, consts: [[1, "offer__slider"], ["alt", "Product Image", 1, "offer__slider--image", 3, "src"], [1, "product-list"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [3, "product", "click"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Products You May Love");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductListComponent_section_5_Template, 2, 1, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/img/slides/slide_1.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _product_thumbnail_grid_component__WEBPACK_IMPORTED_MODULE_5__["ProductThumbnailGrid"]], styles: [".offer__slider[_ngcontent-%COMP%] {\n  width: 96%;\n  margin: 3% 2%;\n}\n.offer__slider--image[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 1.2rem;\n}\n.product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.product-card[_ngcontent-%COMP%] {\n  flex-basis: 48%;\n  flex-shrink: 0;\n  background-color: var(--color-product-card);\n  border-radius: 1rem;\n  margin: 1rem 1%;\n}\n@media (min-width: 37.5em) {\n  .product-card[_ngcontent-%COMP%] {\n    flex-basis: 24%;\n    margin: 1rem 0.5%;\n  }\n}\n@media (min-width: 56.25em) {\n  .product-card[_ngcontent-%COMP%] {\n    flex-basis: 15.6%;\n    margin: 1rem 0.5%;\n  }\n}\n@media (min-width: 75em) {\n  .product-card[_ngcontent-%COMP%] {\n    flex-basis: 11.5%;\n    margin: 1rem 0.5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlc19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQURKO0FBS0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBaUJBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWxCRjtBQ1pJO0VEU0o7SUFJSSxlQUFBO0lBQ0EsaUJBQUE7RUFHRjtBQUNGO0FDWkk7RURHSjtJQVNJLGlCQUFBO0lBQ0EsaUJBQUE7RUFJRjtBQUNGO0FDWkk7RURISjtJQWNJLGlCQUFBO0lBQ0EsaUJBQUE7RUFLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsZXNfbWl4aW5zXCI7XHJcblxyXG4ub2ZmZXJfX3NsaWRlciB7XHJcbiAgd2lkdGg6IDk2JTtcclxuICBtYXJnaW46IDMlIDIlO1xyXG5cclxuICAmLS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jYXJkIHtcclxuICBmbGV4LWJhc2lzOiA0OCU7XHJcblxyXG4gIEBpbmNsdWRlIHJlc3BvbmQodGFiLXBvcnQpIHtcclxuICAgIGZsZXgtYmFzaXM6IDI0JTtcclxuICAgIG1hcmdpbjogMXJlbSAwLjUlO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgcmVzcG9uZCh0YWItbGFuZCkge1xyXG4gICAgZmxleC1iYXNpczogMTUuNiU7XHJcbiAgICBtYXJnaW46IDFyZW0gMC41JTtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIHJlc3BvbmQoZGVza3RvcCkge1xyXG4gICAgZmxleC1iYXNpczogMTEuNSU7XHJcbiAgICBtYXJnaW46IDFyZW0gMC41JTtcclxuICB9XHJcblxyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByb2R1Y3QtY2FyZCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBtYXJnaW46IDFyZW0gMSU7XHJcbn1cclxuIiwiLy8gQG1peGluIHJlc3BvbmQtdGFibGV0IHtcclxuLy8gICBAbWVkaWEgKG1pbjogNjAwcHgpIHtcclxuLy8gICAgIEBjb250ZW50O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuQG1peGluIHJlc3BvbmQoJGJyZWFrcG9pbnQpIHtcclxuICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLXBvcnQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDM3LjVlbSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH0gLy82MDBweFxyXG4gIH1cclxuXHJcbiAgQGlmICRicmVha3BvaW50ID09IHRhYi1sYW5kIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1Ni4yNWVtKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfSAvLzkwMHB4XHJcbiAgfVxyXG5cclxuICBAaWYgJGJyZWFrcG9pbnQgPT0gZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH0gLy8xMjAwcHhcclxuICB9XHJcblxyXG4gIEBpZiAkYnJlYWtwb2ludCA9PSBiaWctZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTEyLjVlbSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH0gLy8xODAwcHhcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // selector: 'product-list',
                templateUrl: './product-list.component.html',
                styleUrls: ['./product-list.component.scss'],
            }]
    }], function () { return [{ type: _shared_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _common_toastr_service__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/products/product-thumbnail-grid.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/products/product-thumbnail-grid.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductThumbnailGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductThumbnailGrid", function() { return ProductThumbnailGrid; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ProductThumbnailGrid_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- $ ", ctx_r0.product.discountedHighPrice, "");
} }
function ProductThumbnailGrid_p_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - $ ", (ctx_r2.product.highPrice * (ctx_r2.product.priceDiscountPercent / 100)).toFixed(2), " ");
} }
function ProductThumbnailGrid_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductThumbnailGrid_p_11_span_3_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", (ctx_r1.product.lowPrice * (ctx_r1.product.priceDiscountPercent / 100)).toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.product.discountedHighPrice > ctx_r1.product.discountedLowPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.product.priceDiscountPercent, "% ");
} }
const _c0 = function (a1) { return ["/products", a1]; };
class ProductThumbnailGrid {
}
ProductThumbnailGrid.ɵfac = function ProductThumbnailGrid_Factory(t) { return new (t || ProductThumbnailGrid)(); };
ProductThumbnailGrid.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductThumbnailGrid, selectors: [["product-thumbnail-grid"]], inputs: { product: "product" }, decls: 17, vars: 9, consts: [[3, "routerLink"], [1, "product__hero"], ["alt", "Product Image", 1, "product__image", 3, "src"], [1, "product__info"], [1, "product__detail"], [1, "product__name"], [1, "product__price"], [4, "ngIf"], ["class", "product__discount", 4, "ngIf"], [1, "product__stats-box"], [1, "product__stats--value"], [1, "product__stats__icon"], [0, "xlink", "href", "/assets/img/sprite.svg#icon-star"], [1, "product__discount"], ["clas", "product__discount--price"], ["clas", "product__discount--price", 4, "ngIf"], ["clas", "product__discount--percentage"]], template: function ProductThumbnailGrid_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figcaption", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductThumbnailGrid_span_10_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductThumbnailGrid_p_11_Template, 6, 3, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.product._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/img/products/250x250_" + ctx.product.imageCover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.product.discountedLowPrice, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.discountedHighPrice > ctx.product.discountedLowPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.priceDiscountPercent > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.ratingsAverage, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".product__hero[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.product__image[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n.product__stats__icon[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  width: 1.5rem;\n  fill: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC10aHVtYm5haWwtZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkU7RUFDRSxXQUFBO0FBaEJKO0FBa0JFO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFoQko7QUE2Q0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUEzQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LXRodW1ibmFpbC1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnByb2R1Y3QtbGlzdCB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LXdyYXA6IHdyYXA7XHJcbi8vICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gfVxyXG5cclxuLnByb2R1Y3Qge1xyXG4gIC8vICYtY2FyZCB7XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIGZsZXgtYmFzaXM6IDQ4JTtcclxuICAvLyBmbGV4LXNocmluazogMDtcclxuICAvLyBoZWlnaHQ6IDMwcmVtO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByb2R1Y3QtY2FyZCk7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAvLyBtYXJnaW46IDFyZW0gMSU7XHJcbiAgLy8gfVxyXG5cclxuICAmX19oZXJvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAmX19pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcclxuICB9XHJcblxyXG4gICZfX2luZm8ge1xyXG4gIH1cclxuXHJcbiAgJl9fZGV0YWlsIHtcclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gIH1cclxuXHJcbiAgJl9fcHJpY2Uge1xyXG4gIH1cclxuXHJcbiAgJl9fZGlzY291bnQge1xyXG4gICAgJi0tcHJpY2Uge1xyXG4gICAgfVxyXG5cclxuICAgICYtLXBlcmNlbnRhZ2Uge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fc3RhdHMtYm94IHtcclxuICB9XHJcblxyXG4gICZfX3N0YXRzLS12YWx1ZSB7XHJcbiAgfVxyXG5cclxuICAmX19zdGF0c19faWNvbiB7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICBmaWxsOiBnb2xkO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductThumbnailGrid, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-thumbnail-grid',
                templateUrl: './product-thumbnail-grid.component.html',
                styleUrls: ['./product-thumbnail-grid.component.scss'],
            }]
    }], null, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/products/products-list-resolver.service.ts":
/*!************************************************************!*\
  !*** ./src/app/products/products-list-resolver.service.ts ***!
  \************************************************************/
/*! exports provided: ProductsListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListResolver", function() { return ProductsListResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/product.service */ "./src/app/products/shared/product.service.ts");




class ProductsListResolver {
    constructor(productService) {
        this.productService = productService;
    }
    resolve() {
        return this.productService.getProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((products) => products));
    }
}
ProductsListResolver.ɵfac = function ProductsListResolver_Factory(t) { return new (t || ProductsListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
ProductsListResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsListResolver, factory: ProductsListResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsListResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/products/shared/index.ts":
/*!******************************************!*\
  !*** ./src/app/products/shared/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.service */ "./src/app/products/shared/product.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_0__["ProductService"]; });

/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.model */ "./src/app/products/shared/product.model.ts");
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_product_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _product_model__WEBPACK_IMPORTED_MODULE_1__) if(["ProductService","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _product_model__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/app/products/shared/product.model.ts":
/*!**************************************************!*\
  !*** ./src/app/products/shared/product.model.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/products/shared/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/products/shared/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ProductService {
    constructor(http) {
        this.http = http;
        this.domain = 'https://jtlfashion.herokuapp.com';
        // private domain: string = "http://127.0.0.1:4000";
        this.loginUrl = `${this.domain}/api/v1/user/login`;
        this.createProdUrl = `${this.domain}/api/v1/product`;
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
    createProduct(formData) {
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'multipart/form-data' }),
            withCredentials: true,
        };
        let prod = this.http
            .post(this.createProdUrl, formData, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => {
            console.log(data);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        prod.subscribe(() => {
            console.log('You In');
        });
    }
    getProducts() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => {
            subject.next(products);
            subject.complete();
        }, 200);
        return subject;
    }
    getProduct(id) {
        return products.find((el) => el._id === id);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();
const products = [
    {
        priceDiscountPercent: 3,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f34d519883c8c0017f7e2ef-1597297945686-cover.jpeg',
            'product-5f34d519883c8c0017f7e2ef-1597297945988-4.jpeg',
            'product-5f34d519883c8c0017f7e2ef-1597297945986-1.jpeg',
            'product-5f34d519883c8c0017f7e2ef-1597297945988-2.jpeg',
            'product-5f34d519883c8c0017f7e2ef-1597297945988-3.jpeg',
            'product-5f34d519883c8c0017f7e2ef-1597297945989-5.jpeg',
        ],
        shipping: true,
        _id: '5f34d519883c8c0017f7e2ef',
        name: 'Zola Prez Female Bag',
        description: 'Elegant and Classy Bag for that royal and modern loom',
        tag: 'women bag',
        category: '5f2872031c89c65205fb3df2',
        colour: [
            {
                _id: '5f34d519883c8c0017f7e2f0',
                colour: 'black',
                quantity: 49,
                price: 40,
                discountPrice: 38.8,
                colourImage: 'product-5f34d519883c8c0017f7e2ef-1597297945853-black.jpeg',
            },
            {
                _id: '5f34d573883c8c0017f7e2f1',
                colour: 'brown',
                quantity: 41,
                price: 48.6,
                colourImage: 'product-5f34d519883c8c0017f7e2ef-1597298035823-brown.jpeg',
                discountPrice: 47.14,
            },
            {
                _id: '5f34d592883c8c0017f7e2f2',
                colour: 'wine',
                quantity: 41,
                price: 48.6,
                colourImage: 'product-5f34d519883c8c0017f7e2ef-1597298066831-wine.jpeg',
                discountPrice: 47.14,
            },
            {
                _id: '5f34d5b4883c8c0017f7e2f3',
                colour: 'purple',
                quantity: 41,
                price: 48.6,
                colourImage: 'product-5f34d519883c8c0017f7e2ef-1597298100679-purple.jpeg',
                discountPrice: 47.14,
            },
        ],
        specification: {
            model: 'Black, Blue and Purple',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-13T05:52:25.678Z'),
        updatedAt: new Date('2020-08-13T05:55:00.832Z'),
        lowPrice: 40,
        highPrice: 48.6,
        discountedLowPrice: 38.8,
        discountedHighPrice: 47.14,
        slug: 'zola-prez-female-bag',
        imageCover: 'product-5f34d519883c8c0017f7e2ef-1597297945686-cover.jpeg',
        quantity: 172,
        id: '5f34d519883c8c0017f7e2ef',
    },
    {
        priceDiscountPercent: 22,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f34d41a883c8c0017f7e2eb-1597297690109-cover.jpeg',
            'product-5f34d41a883c8c0017f7e2eb-1597297690480-2.jpeg',
            'product-5f34d41a883c8c0017f7e2eb-1597297690479-1.jpeg',
            'product-5f34d41a883c8c0017f7e2eb-1597297690481-5.jpeg',
            'product-5f34d41a883c8c0017f7e2eb-1597297690480-3.jpeg',
            'product-5f34d41a883c8c0017f7e2eb-1597297690481-4.jpeg',
        ],
        shipping: true,
        _id: '5f34d41a883c8c0017f7e2eb',
        name: 'Zola Mixin Female Bag',
        description: 'Elegant and Classy Bag for that royal and modern loom',
        tag: 'women bag',
        category: '5f2872031c89c65205fb3df2',
        colour: [
            {
                _id: '5f34d41a883c8c0017f7e2ec',
                colour: 'black',
                quantity: 49,
                price: 40,
                discountPrice: 31.2,
                colourImage: 'product-5f34d41a883c8c0017f7e2eb-1597297690309-black.jpeg',
            },
            {
                _id: '5f34d446883c8c0017f7e2ed',
                colour: 'red',
                quantity: 41,
                price: 40,
                colourImage: 'product-5f34d41a883c8c0017f7e2eb-1597297734679-red.jpeg',
                discountPrice: 31.2,
            },
            {
                _id: '5f34d45c883c8c0017f7e2ee',
                colour: 'brown',
                quantity: 41,
                price: 40,
                colourImage: 'product-5f34d41a883c8c0017f7e2eb-1597297756045-brown.jpeg',
                discountPrice: 31.2,
            },
        ],
        specification: {
            model: 'Black, Blue and Purple',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-13T05:48:10.092Z'),
        updatedAt: new Date('2020-08-13T05:49:16.212Z'),
        lowPrice: 40,
        highPrice: 40,
        discountedLowPrice: 31.2,
        discountedHighPrice: 31.2,
        slug: 'zola-mixin-female-bag',
        imageCover: 'product-5f34d41a883c8c0017f7e2eb-1597297690109-cover.jpeg',
        quantity: 131,
        id: '5f34d41a883c8c0017f7e2eb',
    },
    {
        priceDiscountPercent: 9,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f34494a5e39c50017cdeef7-1597262154426-cover.jpeg',
            'product-5f34494a5e39c50017cdeef7-1597262155213-2.jpeg',
            'product-5f34494a5e39c50017cdeef7-1597262155214-3.jpeg',
            'product-5f34494a5e39c50017cdeef7-1597262155213-1.jpeg',
            'product-5f34494a5e39c50017cdeef7-1597262155217-4.jpeg',
            'product-5f34494a5e39c50017cdeef7-1597262155217-5.jpeg',
        ],
        shipping: true,
        _id: '5f34494a5e39c50017cdeef7',
        name: 'Zola Phantrox Female Bag',
        description: 'Elegant and Classy Bag for that royal and modern loom',
        tag: 'women bag',
        category: '5f2872031c89c65205fb3df2',
        colour: [
            {
                _id: '5f34494a5e39c50017cdeef8',
                colour: 'black',
                quantity: 45,
                price: 43.36,
                discountPrice: 39.46,
                colourImage: 'product-5f34494a5e39c50017cdeef7-1597262154890-black.jpeg',
            },
        ],
        specification: {
            model: 'Black, Blue and Purple',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T19:55:54.418Z'),
        updatedAt: new Date('2020-08-12T19:55:55.747Z'),
        lowPrice: 43.36,
        highPrice: 43.36,
        discountedLowPrice: 39.46,
        discountedHighPrice: 39.46,
        slug: 'zola-phantrox-female-bag',
        imageCover: 'product-5f34494a5e39c50017cdeef7-1597262154426-cover.jpeg',
        quantity: 45,
        id: '5f34494a5e39c50017cdeef7',
    },
    {
        priceDiscountPercent: 7.2,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f3448015e39c50017cdeef2-1597261825808-cover.jpeg',
            'product-5f3448015e39c50017cdeef2-1597261826036-2.jpeg',
            'product-5f3448015e39c50017cdeef2-1597261826035-1.jpeg',
            'product-5f3448015e39c50017cdeef2-1597261826036-3.jpeg',
            'product-5f3448015e39c50017cdeef2-1597261826036-4.jpeg',
            'product-5f3448015e39c50017cdeef2-1597261826037-5.jpeg',
        ],
        shipping: true,
        _id: '5f3448015e39c50017cdeef2',
        name: 'Zola Marvel-Pro Female Bag',
        description: 'Elegant and Classy Bag for that royal and modern loom',
        tag: 'women bag',
        category: '5f2872031c89c65205fb3df2',
        colour: [
            {
                _id: '5f3448015e39c50017cdeef3',
                colour: 'black',
                quantity: 45,
                price: 43.36,
                discountPrice: 40.24,
                colourImage: 'product-5f3448015e39c50017cdeef2-1597261825921-black.jpeg',
            },
            {
                _id: '5f3448495e39c50017cdeef4',
                colour: 'purple',
                quantity: 41,
                price: 45.9,
                colourImage: 'product-5f3448015e39c50017cdeef2-1597261897540-purple.jpeg',
                discountPrice: 42.6,
            },
            {
                _id: '5f3448655e39c50017cdeef5',
                colour: 'brown',
                quantity: 41,
                price: 45.9,
                colourImage: 'product-5f3448015e39c50017cdeef2-1597261925666-brown.jpeg',
                discountPrice: 42.6,
            },
            {
                _id: '5f3448945e39c50017cdeef6',
                colour: 'red',
                quantity: 41,
                price: 45.9,
                colourImage: 'product-5f3448015e39c50017cdeef2-1597261971995-red.jpeg',
                discountPrice: 42.6,
            },
        ],
        specification: {
            model: 'Black, Blue and Purple',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T19:50:25.804Z'),
        updatedAt: new Date('2020-08-12T19:52:52.506Z'),
        lowPrice: 43.36,
        highPrice: 45.9,
        discountedLowPrice: 40.24,
        discountedHighPrice: 42.6,
        slug: 'zola-marvel-pro-female-bag',
        imageCover: 'product-5f3448015e39c50017cdeef2-1597261825808-cover.jpeg',
        quantity: 168,
        id: '5f3448015e39c50017cdeef2',
    },
    {
        priceDiscountPercent: 7.2,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f34469d5e39c50017cdeeed-1597261469273-cover.jpeg',
            'product-5f34469d5e39c50017cdeeed-1597261469507-1.jpeg',
            'product-5f34469d5e39c50017cdeeed-1597261469508-2.jpeg',
            'product-5f34469d5e39c50017cdeeed-1597261469508-3.jpeg',
            'product-5f34469d5e39c50017cdeeed-1597261469509-5.jpeg',
            'product-5f34469d5e39c50017cdeeed-1597261469508-4.jpeg',
        ],
        shipping: true,
        _id: '5f34469d5e39c50017cdeeed',
        name: 'Zola Marvel Female Bag',
        description: 'Elegant and Classy Bag for that royal and modern loom',
        tag: 'women bag',
        category: '5f2872031c89c65205fb3df2',
        colour: [
            {
                _id: '5f34469d5e39c50017cdeeee',
                colour: 'black',
                quantity: 45,
                price: 25.44,
                discountPrice: 23.61,
                colourImage: 'product-5f34469d5e39c50017cdeeed-1597261469376-black.jpeg',
            },
            {
                _id: '5f3446e75e39c50017cdeeef',
                colour: 'purple',
                quantity: 41,
                price: 28,
                colourImage: 'product-5f34469d5e39c50017cdeeed-1597261543314-purple.jpeg',
                discountPrice: 25.98,
            },
            {
                _id: '5f3447045e39c50017cdeef0',
                colour: 'light brown',
                quantity: 41,
                price: 28,
                colourImage: 'product-5f34469d5e39c50017cdeeed-1597261572641-light brown.jpeg',
                discountPrice: 25.98,
            },
            {
                _id: '5f34473a5e39c50017cdeef1',
                colour: 'blue',
                quantity: 41,
                price: 28,
                colourImage: 'product-5f34469d5e39c50017cdeeed-1597261625953-blue.jpeg',
                discountPrice: 25.98,
            },
        ],
        specification: {
            model: 'Black, Blue and Purple',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T19:44:29.267Z'),
        updatedAt: new Date('2020-08-12T19:47:06.054Z'),
        lowPrice: 25.44,
        highPrice: 28,
        discountedLowPrice: 23.61,
        discountedHighPrice: 25.98,
        slug: 'zola-marvel-female-bag',
        imageCover: 'product-5f34469d5e39c50017cdeeed-1597261469273-cover.jpeg',
        quantity: 168,
        id: '5f34469d5e39c50017cdeeed',
    },
    {
        priceDiscountPercent: 7.2,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f3445aa5e39c50017cdeeea-1597261226957-cover.jpeg',
            'product-5f3445aa5e39c50017cdeeea-1597261227383-4.jpeg',
            'product-5f3445aa5e39c50017cdeeea-1597261227382-2.jpeg',
            'product-5f3445aa5e39c50017cdeeea-1597261227377-1.jpeg',
            'product-5f3445aa5e39c50017cdeeea-1597261227383-3.jpeg',
            'product-5f3445aa5e39c50017cdeeea-1597261227393-5.jpeg',
        ],
        shipping: true,
        _id: '5f3445aa5e39c50017cdeeea',
        name: 'Zola Pyravibe Female Bag',
        description: 'Elegant and Classy Bag for that royal and modern loom',
        tag: 'women bag',
        category: '5f2872031c89c65205fb3df2',
        colour: [
            {
                _id: '5f3445aa5e39c50017cdeeeb',
                colour: 'black',
                quantity: 45,
                price: 62.4,
                discountPrice: 57.91,
                colourImage: 'product-5f3445aa5e39c50017cdeeea-1597261227151-black.jpeg',
            },
            {
                _id: '5f3445ee5e39c50017cdeeec',
                colour: 'cream',
                quantity: 41,
                price: 68.5,
                colourImage: 'product-5f3445aa5e39c50017cdeeea-1597261294727-cream.jpeg',
                discountPrice: 63.57,
            },
        ],
        specification: {
            model: 'Black, Blue and Purple',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T19:40:26.949Z'),
        updatedAt: new Date('2020-08-12T19:41:34.994Z'),
        lowPrice: 62.4,
        highPrice: 68.5,
        discountedLowPrice: 57.91,
        discountedHighPrice: 63.57,
        slug: 'zola-pyravibe-female-bag',
        imageCover: 'product-5f3445aa5e39c50017cdeeea-1597261226957-cover.jpeg',
        quantity: 86,
        id: '5f3445aa5e39c50017cdeeea',
    },
    {
        priceDiscountPercent: 0,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f3441ae5e39c50017cdeee5-1597260207005-cover.jpeg',
            'product-5f3441ae5e39c50017cdeee5-1597260207311-2.jpeg',
            'product-5f3441ae5e39c50017cdeee5-1597260207311-1.jpeg',
            'product-5f3441ae5e39c50017cdeee5-1597260207313-3.jpeg',
            'product-5f3441ae5e39c50017cdeee5-1597260207325-5.jpeg',
            'product-5f3441ae5e39c50017cdeee5-1597260207313-4.jpeg',
        ],
        shipping: true,
        _id: '5f3441ae5e39c50017cdeee5',
        name: 'Zola Vibe Female Bag',
        description: 'Elegant and Classy Bag for that royal and modern loom',
        tag: 'women bag',
        category: '5f2872031c89c65205fb3df2',
        colour: [
            {
                _id: '5f3441ae5e39c50017cdeee6',
                colour: 'black',
                quantity: 85,
                price: 66.5,
                discountPrice: 66.5,
                colourImage: 'product-5f3441ae5e39c50017cdeee5-1597260207135-black.jpeg',
            },
            {
                _id: '5f3442205e39c50017cdeee7',
                colour: 'purple',
                quantity: 41,
                price: 66.5,
                colourImage: 'product-5f3441ae5e39c50017cdeee5-1597260320368-purple.jpeg',
                discountPrice: 66.5,
            },
            {
                _id: '5f3442315e39c50017cdeee8',
                colour: 'red',
                quantity: 41,
                price: 66.5,
                colourImage: 'product-5f3441ae5e39c50017cdeee5-1597260337526-red.jpeg',
                discountPrice: 66.5,
            },
            {
                _id: '5f34424e5e39c50017cdeee9',
                colour: 'nude',
                quantity: 41,
                price: 66.5,
                colourImage: 'product-5f3441ae5e39c50017cdeee5-1597260366477-nude.jpeg',
                discountPrice: 66.5,
            },
        ],
        specification: {
            model: 'Black, Blue and Purple',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T19:23:26.995Z'),
        updatedAt: new Date('2020-08-12T19:26:06.635Z'),
        lowPrice: 66.5,
        highPrice: 66.5,
        discountedLowPrice: 66.5,
        discountedHighPrice: 66.5,
        slug: 'zola-vibe-female-bag',
        imageCover: 'product-5f3441ae5e39c50017cdeee5-1597260207005-cover.jpeg',
        quantity: 208,
        id: '5f3441ae5e39c50017cdeee5',
    },
    {
        priceDiscountPercent: 0,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f343f7e5e39c50017cdeedf-1597259646446-cover.jpeg',
            'product-5f343f7e5e39c50017cdeedf-1597259647274-1.jpeg',
            'product-5f343f7e5e39c50017cdeedf-1597259647372-5.jpeg',
            'product-5f343f7e5e39c50017cdeedf-1597259647318-3.jpeg',
            'product-5f343f7e5e39c50017cdeedf-1597259647284-2.jpeg',
            'product-5f343f7e5e39c50017cdeedf-1597259647362-4.jpeg',
        ],
        shipping: true,
        _id: '5f343f7e5e39c50017cdeedf',
        name: 'JTL Rosvil Female Bag',
        description: 'Elegant and Classy shoe',
        tag: 'women bag',
        category: '5f2872031c89c65205fb3df2',
        colour: [
            {
                _id: '5f343f7e5e39c50017cdeee0',
                colour: 'black',
                quantity: 114,
                price: 34.5,
                discountPrice: 34.5,
                colourImage: 'product-5f343f7e5e39c50017cdeedf-1597259646933-black.jpeg',
            },
            {
                _id: '5f343fad5e39c50017cdeee1',
                colour: 'purple',
                quantity: 110,
                price: 34.5,
                colourImage: 'product-5f343f7e5e39c50017cdeedf-1597259692814-purple.jpeg',
                discountPrice: 34.5,
            },
            {
                _id: '5f343fbe5e39c50017cdeee2',
                colour: 'wine',
                quantity: 110,
                price: 34.5,
                colourImage: 'product-5f343f7e5e39c50017cdeedf-1597259710325-wine.jpeg',
                discountPrice: 34.5,
            },
            {
                _id: '5f343fda5e39c50017cdeee3',
                colour: 'gray',
                quantity: 110,
                price: 34.5,
                colourImage: 'product-5f343f7e5e39c50017cdeedf-1597259738170-gray.jpeg',
                discountPrice: 34.5,
            },
            {
                _id: '5f343fea5e39c50017cdeee4',
                colour: 'brown',
                quantity: 110,
                price: 34.5,
                colourImage: 'product-5f343f7e5e39c50017cdeedf-1597259754261-brown.jpeg',
                discountPrice: 34.5,
            },
        ],
        specification: {
            model: 'Black, Blue and Purple',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T19:14:06.419Z'),
        updatedAt: new Date('2020-08-12T19:15:54.631Z'),
        lowPrice: 34.5,
        highPrice: 34.5,
        discountedLowPrice: 34.5,
        discountedHighPrice: 34.5,
        slug: 'jtl-rosvil-female-bag',
        imageCover: 'product-5f343f7e5e39c50017cdeedf-1597259646446-cover.jpeg',
        quantity: 554,
        id: '5f343f7e5e39c50017cdeedf',
    },
    {
        priceDiscountPercent: 0,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f343e5f5e39c50017cdeedb-1597259359993-cover.jpeg',
            'product-5f343e5f5e39c50017cdeedb-1597259360433-3.jpeg',
            'product-5f343e5f5e39c50017cdeedb-1597259360426-1.jpeg',
            'product-5f343e5f5e39c50017cdeedb-1597259360438-4.jpeg',
            'product-5f343e5f5e39c50017cdeedb-1597259360427-2.jpeg',
        ],
        shipping: true,
        _id: '5f343e5f5e39c50017cdeedb',
        name: 'JTL Roll Mens Bag',
        description: 'Elegant and Classy shoe',
        tag: 'mens bag',
        category: '5f2872091c89c65205fb3df3',
        colour: [
            {
                _id: '5f343e5f5e39c50017cdeedc',
                colour: 'black',
                quantity: 70,
                price: 21,
                discountPrice: 21,
                colourImage: 'product-5f343e5f5e39c50017cdeedb-1597259360146-black.jpeg',
            },
            {
                _id: '5f343e825e39c50017cdeedd',
                colour: 'blue',
                quantity: 42,
                price: 21,
                colourImage: 'product-5f343e5f5e39c50017cdeedb-1597259393099-blue.jpeg',
                discountPrice: 21,
            },
            {
                _id: '5f343ea55e39c50017cdeede',
                colour: 'gray',
                quantity: 110,
                price: 21,
                colourImage: 'product-5f343e5f5e39c50017cdeedb-1597259428943-gray.jpeg',
                discountPrice: 21,
            },
        ],
        specification: {
            model: 'Black, Blue ang Gray',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T19:09:19.987Z'),
        updatedAt: new Date('2020-08-12T19:10:29.484Z'),
        lowPrice: 21,
        highPrice: 21,
        discountedLowPrice: 21,
        discountedHighPrice: 21,
        slug: 'jtl-roll-mens-bag',
        imageCover: 'product-5f343e5f5e39c50017cdeedb-1597259359993-cover.jpeg',
        quantity: 222,
        id: '5f343e5f5e39c50017cdeedb',
    },
    {
        priceDiscountPercent: 11.5,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f343d6e5e39c50017cdeed8-1597259118382-cover.jpeg',
            'product-5f343d6e5e39c50017cdeed8-1597259118802-4.jpeg',
            'product-5f343d6e5e39c50017cdeed8-1597259118771-2.jpeg',
            'product-5f343d6e5e39c50017cdeed8-1597259118770-1.jpeg',
            'product-5f343d6e5e39c50017cdeed8-1597259118773-3.jpeg',
        ],
        shipping: true,
        _id: '5f343d6e5e39c50017cdeed8',
        name: 'JTL Roll Mens Canvas shoes',
        description: 'Elegant and Classy shoe',
        tag: 'mens shoe Canvas',
        category: '5f28722d1c89c65205fb3df4',
        colour: [
            {
                _id: '5f343d6e5e39c50017cdeed9',
                colour: 'brown',
                quantity: 50,
                price: 57.3,
                discountPrice: 50.71,
                colourImage: 'product-5f343d6e5e39c50017cdeed8-1597259118569-brown.jpeg',
            },
            {
                _id: '5f343d875e39c50017cdeeda',
                colour: 'black',
                quantity: 42,
                price: 56.3,
                colourImage: 'product-5f343d6e5e39c50017cdeed8-1597259142844-black.jpeg',
                discountPrice: 49.83,
            },
        ],
        specification: {
            model: 'White',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T19:05:18.375Z'),
        updatedAt: new Date('2020-08-12T19:05:43.087Z'),
        lowPrice: 56.3,
        highPrice: 57.3,
        discountedLowPrice: 49.83,
        discountedHighPrice: 50.71,
        slug: 'jtl-roll-mens-canvas-shoes',
        imageCover: 'product-5f343d6e5e39c50017cdeed8-1597259118382-cover.jpeg',
        quantity: 92,
        id: '5f343d6e5e39c50017cdeed8',
    },
    {
        priceDiscountPercent: 11.5,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f343ce85e39c50017cdeed5-1597258984580-cover.jpeg',
            'product-5f343ce85e39c50017cdeed5-1597258985340-1.jpeg',
            'product-5f343ce85e39c50017cdeed5-1597258985341-2.jpeg',
            'product-5f343ce85e39c50017cdeed5-1597258985349-3.jpeg',
        ],
        shipping: true,
        _id: '5f343ce85e39c50017cdeed5',
        name: 'JTL Nutches Mens Oxford shoes',
        description: 'Elegant and Classy shoe',
        tag: 'mens shoe Oxford',
        category: '5f28722d1c89c65205fb3df4',
        colour: [
            {
                _id: '5f343ce85e39c50017cdeed6',
                colour: 'brown',
                quantity: 50,
                price: 57.3,
                discountPrice: 50.71,
                colourImage: 'product-5f343ce85e39c50017cdeed5-1597258984963-brown.jpeg',
            },
            {
                _id: '5f343d0c5e39c50017cdeed7',
                colour: 'black',
                quantity: 42,
                price: 56.3,
                colourImage: 'product-5f343ce85e39c50017cdeed5-1597259020145-black.jpeg',
                discountPrice: 49.83,
            },
        ],
        specification: {
            model: 'Black or Brown',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T19:03:04.554Z'),
        updatedAt: new Date('2020-08-12T19:03:40.336Z'),
        lowPrice: 56.3,
        highPrice: 57.3,
        discountedLowPrice: 49.83,
        discountedHighPrice: 50.71,
        slug: 'jtl-nutches-mens-oxford-shoes',
        imageCover: 'product-5f343ce85e39c50017cdeed5-1597258984580-cover.jpeg',
        quantity: 92,
        id: '5f343ce85e39c50017cdeed5',
    },
    {
        priceDiscountPercent: null,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f343a925e39c50017cdeecd-1597258386611-cover.jpeg',
            'product-5f343a925e39c50017cdeecd-1597258387200-2.jpeg',
            'product-5f343a925e39c50017cdeecd-1597258387197-1.jpeg',
            'product-5f343a925e39c50017cdeecd-1597258387201-3.jpeg',
            'product-5f343a925e39c50017cdeecd-1597258387205-4.jpeg',
        ],
        shipping: true,
        _id: '5f343a925e39c50017cdeecd',
        name: 'JTL Top Nutch Oxford shoes',
        description: 'Elegant and Classy shoe',
        tag: 'mens shoe Oxford',
        category: '5f28722d1c89c65205fb3df4',
        colour: [
            {
                _id: '5f343a925e39c50017cdeece',
                colour: 'light brown',
                quantity: 47,
                price: 50,
                discountPrice: 50,
                colourImage: 'product-5f343a925e39c50017cdeecd-1597258386957-light brown.jpeg',
            },
            {
                _id: '5f343ace5e39c50017cdeecf',
                colour: 'coffee brown',
                quantity: 42,
                price: 50,
                colourImage: 'product-5f343a925e39c50017cdeecd-1597258446219-coffee brown.jpeg',
                discountPrice: 50,
            },
            {
                _id: '5f343aff5e39c50017cdeed0',
                colour: 'black',
                quantity: 42,
                price: 52.8,
                colourImage: 'product-5f343a925e39c50017cdeecd-1597258494901-black.jpeg',
                discountPrice: 52.8,
            },
            {
                _id: '5f343b435e39c50017cdeed1',
                colour: 'blue-brown-1',
                quantity: 42,
                price: 56.3,
                colourImage: 'product-5f343a925e39c50017cdeecd-1597258563035-blue-brown-1.jpeg',
                discountPrice: 56.3,
            },
            {
                _id: '5f343b8c5e39c50017cdeed2',
                colour: 'blue-brown-2',
                quantity: 42,
                price: 52.7,
                colourImage: 'product-5f343a925e39c50017cdeecd-1597258636164-blue-brown-2.jpeg',
                discountPrice: 52.7,
            },
            {
                _id: '5f343bf75e39c50017cdeed3',
                colour: 'brown-mix',
                quantity: 42,
                price: 52.7,
                colourImage: 'product-5f343a925e39c50017cdeecd-1597258743536-brown-mix.jpeg',
                discountPrice: 52.7,
            },
            {
                _id: '5f343c205e39c50017cdeed4',
                colour: 'black-brown',
                quantity: 42,
                price: 56.3,
                colourImage: 'product-5f343a925e39c50017cdeecd-1597258783833-black-brown.jpeg',
                discountPrice: 56.3,
            },
        ],
        specification: {
            model: 'Multi-colours',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T18:53:06.599Z'),
        updatedAt: new Date('2020-08-12T18:59:44.148Z'),
        lowPrice: 50,
        highPrice: 56.3,
        discountedLowPrice: 50,
        discountedHighPrice: 56.3,
        slug: 'jtl-top-nutch-oxford-shoes',
        imageCover: 'product-5f343a925e39c50017cdeecd-1597258386611-cover.jpeg',
        quantity: 299,
        id: '5f343a925e39c50017cdeecd',
    },
    {
        priceDiscountPercent: 34,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f3437b45e39c50017cdeec8-1597257652452-cover.jpeg',
            'product-5f3437b45e39c50017cdeec8-1597257653955-1.jpeg',
            'product-5f3437b45e39c50017cdeec8-1597257653956-2.jpeg',
            'product-5f3437b45e39c50017cdeec8-1597257653959-3.jpeg',
        ],
        shipping: true,
        _id: '5f3437b45e39c50017cdeec8',
        name: 'JTL Vanmil Oxford shoes',
        description: 'Elegant and Classy shoe',
        tag: 'mens shoe Oxford',
        category: '5f28722d1c89c65205fb3df4',
        colour: [
            {
                _id: '5f3437b45e39c50017cdeec9',
                colour: 'brown',
                quantity: 40,
                price: 50,
                discountPrice: 33,
                colourImage: 'product-5f3437b45e39c50017cdeec8-1597257653233-brown.jpeg',
            },
            {
                _id: '5f3437ef5e39c50017cdeeca',
                colour: 'black',
                quantity: 42,
                price: 50,
                colourImage: 'product-5f3437b45e39c50017cdeec8-1597257710996-black.jpeg',
                discountPrice: 33,
            },
            {
                _id: '5f34380a5e39c50017cdeecb',
                colour: 'white',
                quantity: 42,
                price: 50,
                colourImage: 'product-5f3437b45e39c50017cdeec8-1597257737837-white.jpeg',
                discountPrice: 33,
            },
            {
                _id: '5f34381a5e39c50017cdeecc',
                colour: 'blue',
                quantity: 42,
                price: 50,
                colourImage: 'product-5f3437b45e39c50017cdeec8-1597257753567-blue.jpeg',
                discountPrice: 33,
            },
        ],
        specification: {
            model: 'Multi-colours',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T18:40:52.432Z'),
        updatedAt: new Date('2020-08-12T18:42:34.324Z'),
        lowPrice: 50,
        highPrice: 50,
        discountedLowPrice: 33,
        discountedHighPrice: 33,
        slug: 'jtl-vanmil-oxford-shoes',
        imageCover: 'product-5f3437b45e39c50017cdeec8-1597257652452-cover.jpeg',
        quantity: 166,
        id: '5f3437b45e39c50017cdeec8',
    },
    {
        priceDiscountPercent: 11,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f3432ef5e39c50017cdeec6-1597256431873-cover.jpeg',
            'product-5f3432ef5e39c50017cdeec6-1597256433502-1.jpeg',
            'product-5f3432ef5e39c50017cdeec6-1597256433504-2.jpeg',
        ],
        shipping: true,
        _id: '5f3432ef5e39c50017cdeec6',
        name: 'JTL Brown Oxford shoes',
        description: 'Elegant and Classy shoe',
        tag: 'mens shoe Canvas',
        category: '5f28722d1c89c65205fb3df4',
        colour: [
            {
                _id: '5f3432ef5e39c50017cdeec7',
                colour: 'brown',
                quantity: 40,
                price: 47.2,
                discountPrice: 42.01,
                colourImage: 'product-5f3432ef5e39c50017cdeec6-1597256432771-brown.jpeg',
            },
        ],
        createdAt: new Date('2020-08-12T18:20:31.835Z'),
        updatedAt: new Date('2020-08-12T18:20:34.097Z'),
        lowPrice: 47.2,
        highPrice: 47.2,
        discountedLowPrice: 42.01,
        discountedHighPrice: 42.01,
        slug: 'jtl-brown-oxford-shoes',
        imageCover: 'product-5f3432ef5e39c50017cdeec6-1597256431873-cover.jpeg',
        quantity: 40,
        id: '5f3432ef5e39c50017cdeec6',
    },
    {
        priceDiscountPercent: 11,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f3412d9b698290017019eef-1597248217745-cover.jpeg',
            'product-5f3412d9b698290017019eef-1597248217980-1.jpeg',
            'product-5f3412d9b698290017019eef-1597248217980-3.jpeg',
            'product-5f3412d9b698290017019eef-1597248217981-4.jpeg',
            'product-5f3412d9b698290017019eef-1597248217980-2.jpeg',
        ],
        shipping: true,
        _id: '5f3412d9b698290017019eef',
        name: 'JTL Female Canvas shoes',
        description: 'Elegant and Classy shoe',
        tag: 'ladies shoe Canvas',
        category: '5f2872371c89c65205fb3df5',
        colour: [
            {
                _id: '5f3412d9b698290017019ef0',
                colour: 'black',
                quantity: 40,
                price: 36.4,
                discountPrice: 32.4,
                colourImage: 'product-5f3412d9b698290017019eef-1597248217868-black.jpeg',
            },
            {
                _id: '5f3412feb698290017019ef1',
                colour: 'purple',
                quantity: 42,
                price: 36.4,
                colourImage: 'product-5f3412d9b698290017019eef-1597248254132-purple.jpeg',
                discountPrice: 32.4,
            },
        ],
        createdAt: new Date('2020-08-12T16:03:37.739Z'),
        updatedAt: new Date('2020-08-12T16:04:14.730Z'),
        lowPrice: 36.4,
        highPrice: 36.4,
        discountedLowPrice: 32.4,
        discountedHighPrice: 32.4,
        slug: 'jtl-female-canvas-shoes',
        imageCover: 'product-5f3412d9b698290017019eef-1597248217745-cover.jpeg',
        quantity: 82,
        id: '5f3412d9b698290017019eef',
    },
    {
        priceDiscountPercent: 18,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f341063b698290017019eea-1597247587877-cover.jpeg',
            'product-5f341063b698290017019eea-1597247588128-1.jpeg',
            'product-5f341063b698290017019eea-1597247588146-4.jpeg',
            'product-5f341063b698290017019eea-1597247588134-2.jpeg',
            'product-5f341063b698290017019eea-1597247588145-3.jpeg',
        ],
        shipping: true,
        _id: '5f341063b698290017019eea',
        name: 'JTL Low-Flat Ladies Sandal shoes',
        description: 'Elegant and Classy shoe',
        tag: 'ladies shoe sandal',
        category: '5f2872371c89c65205fb3df5',
        colour: [
            {
                _id: '5f341063b698290017019eeb',
                colour: 'blue',
                quantity: 40,
                price: 29,
                discountPrice: 23.78,
                colourImage: 'product-5f341063b698290017019eea-1597247587971-blue.jpeg',
            },
            {
                _id: '5f3410deb698290017019eec',
                colour: 'yellow',
                quantity: 42,
                price: 29,
                colourImage: 'product-5f341063b698290017019eea-1597247710497-yellow.jpeg',
                discountPrice: 23.78,
            },
            {
                _id: '5f34111ab698290017019eed',
                colour: 'wine',
                quantity: 42,
                price: 29,
                colourImage: 'product-5f341063b698290017019eea-1597247770424-wine.jpeg',
                discountPrice: 23.78,
            },
            {
                _id: '5f341141b698290017019eee',
                colour: 'nude',
                quantity: 42,
                price: 29,
                colourImage: 'product-5f341063b698290017019eea-1597247809571-nude.jpeg',
                discountPrice: 23.78,
            },
        ],
        createdAt: new Date('2020-08-12T15:53:07.872Z'),
        updatedAt: new Date('2020-08-12T15:59:53.959Z'),
        lowPrice: 29,
        highPrice: 29,
        discountedLowPrice: 23.78,
        discountedHighPrice: 23.78,
        slug: 'jtl-low-flat-ladies-sandal-shoes',
        imageCover: 'product-5f341063b698290017019eea-1597247587877-cover.jpeg',
        quantity: 166,
        id: '5f341063b698290017019eea',
    },
    {
        priceDiscountPercent: 18,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f340dbeb698290017019ee4-1597246910045-cover.jpeg',
            'product-5f340dbeb698290017019ee4-1597246911825-1.jpeg',
            'product-5f340dbeb698290017019ee4-1597246911832-3.jpeg',
            'product-5f340dbeb698290017019ee4-1597246911833-4.jpeg',
            'product-5f340dbeb698290017019ee4-1597246911830-2.jpeg',
        ],
        shipping: true,
        _id: '5f340dbeb698290017019ee4',
        name: 'JTL Low-Flat Ladies shoes',
        description: 'Elegant and Classy shoe',
        tag: 'ladies shoe',
        category: '5f2872371c89c65205fb3df5',
        colour: [
            {
                _id: '5f340dbeb698290017019ee5',
                colour: 'blue',
                quantity: 47,
                price: 33.74,
                discountPrice: 27.67,
                colourImage: 'product-5f340dbeb698290017019ee4-1597246911102-blue.jpeg',
            },
            {
                _id: '5f340e0db698290017019ee6',
                colour: 'black',
                quantity: 42,
                price: 33.74,
                colourImage: 'product-5f340dbeb698290017019ee4-1597246989565-black.jpeg',
                discountPrice: 27.67,
            },
            {
                _id: '5f340e38b698290017019ee7',
                colour: 'white',
                quantity: 42,
                price: 33.74,
                colourImage: 'product-5f340dbeb698290017019ee4-1597247031957-white.jpeg',
                discountPrice: 27.67,
            },
            {
                _id: '5f340e6ab698290017019ee8',
                colour: 'orange',
                quantity: 42,
                price: 33.74,
                colourImage: 'product-5f340dbeb698290017019ee4-1597247081695-orange.jpeg',
                discountPrice: 27.67,
            },
            {
                _id: '5f340efbb698290017019ee9',
                colour: 'yellow',
                quantity: 42,
                price: 33.74,
                colourImage: 'product-5f340dbeb698290017019ee4-1597247227429-yellow.jpeg',
                discountPrice: 27.67,
            },
        ],
        createdAt: new Date('2020-08-12T15:41:50.036Z'),
        updatedAt: new Date('2020-08-12T15:47:07.787Z'),
        lowPrice: 33.74,
        highPrice: 33.74,
        discountedLowPrice: 27.67,
        discountedHighPrice: 27.67,
        slug: 'jtl-low-flat-ladies-shoes',
        imageCover: 'product-5f340dbeb698290017019ee4-1597246910045-cover.jpeg',
        quantity: 215,
        id: '5f340dbeb698290017019ee4',
    },
    {
        priceDiscountPercent: 0,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f340b60b698290017019ee2-1597246304991-cover.jpeg',
            'product-5f340b60b698290017019ee2-1597246305312-1.jpeg',
            'product-5f340b60b698290017019ee2-1597246305312-2.jpeg',
            'product-5f340b60b698290017019ee2-1597246305314-4.jpeg',
            'product-5f340b60b698290017019ee2-1597246305313-3.jpeg',
            'product-5f340b60b698290017019ee2-1597246305314-5.jpeg',
        ],
        shipping: true,
        _id: '5f340b60b698290017019ee2',
        name: 'Spider Man Children Bag',
        description: 'Beautiful, colourful and exciting bags for children',
        tag: 'bag children mickey',
        category: '5f2871f61c89c65205fb3df1',
        colour: [
            {
                _id: '5f340b60b698290017019ee3',
                colour: 'blue',
                quantity: 47,
                price: 18.6,
                discountPrice: 18.6,
                colourImage: 'product-5f340b60b698290017019ee2-1597246305173-blue.jpeg',
            },
        ],
        createdAt: new Date('2020-08-12T15:31:44.984Z'),
        updatedAt: new Date('2020-08-12T15:31:45.829Z'),
        lowPrice: 18.6,
        highPrice: 18.6,
        discountedLowPrice: 18.6,
        discountedHighPrice: 18.6,
        slug: 'spider-man-children-bag',
        imageCover: 'product-5f340b60b698290017019ee2-1597246304991-cover.jpeg',
        quantity: 47,
        id: '5f340b60b698290017019ee2',
    },
    {
        priceDiscountPercent: 5,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f3409b0b698290017019ede-1597245872900-cover.jpeg',
            'product-5f3409b0b698290017019ede-1597245873101-1.jpeg',
            'product-5f3409b0b698290017019ede-1597245873103-4.jpeg',
            'product-5f3409b0b698290017019ede-1597245873102-3.jpeg',
            'product-5f3409b0b698290017019ede-1597245873101-2.jpeg',
        ],
        shipping: true,
        _id: '5f3409b0b698290017019ede',
        name: 'Mickey Children Bag',
        description: 'Beautiful, colourful and exciting bags for children',
        tag: 'bag children mickey',
        category: '5f2871f61c89c65205fb3df1',
        colour: [
            {
                _id: '5f3409b0b698290017019edf',
                colour: 'col-1',
                quantity: 50,
                price: 21.3,
                discountPrice: 20.23,
                colourImage: 'product-5f3409b0b698290017019ede-1597245872982-col-1.jpeg',
            },
            {
                _id: '5f3409e2b698290017019ee0',
                colour: 'col-2',
                quantity: 40,
                price: 21.2,
                colourImage: 'product-5f3409b0b698290017019ede-1597245922049-col-2.jpeg',
                discountPrice: 20.14,
            },
            {
                _id: '5f3409fdb698290017019ee1',
                colour: 'col-3',
                quantity: 40,
                price: 21.2,
                colourImage: 'product-5f3409b0b698290017019ede-1597245949776-col-3.jpeg',
                discountPrice: 20.14,
            },
        ],
        createdAt: new Date('2020-08-12T15:24:32.895Z'),
        updatedAt: new Date('2020-08-12T15:25:49.930Z'),
        lowPrice: 21.2,
        highPrice: 21.3,
        discountedLowPrice: 20.14,
        discountedHighPrice: 20.23,
        slug: 'mickey-children-bag',
        imageCover: 'product-5f3409b0b698290017019ede-1597245872900-cover.jpeg',
        quantity: 130,
        id: '5f3409b0b698290017019ede',
    },
    {
        priceDiscountPercent: 5,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f340878b698290017019edc-1597245560559-cover.jpeg',
            'product-5f340878b698290017019edc-1597245560789-1.jpeg',
            'product-5f340878b698290017019edc-1597245560789-2.jpeg',
            'product-5f340878b698290017019edc-1597245560791-4.jpeg',
            'product-5f340878b698290017019edc-1597245560791-3.jpeg',
        ],
        shipping: true,
        _id: '5f340878b698290017019edc',
        name: 'Mickey Mouse Children Bag',
        description: 'Beautiful, colourful and exciting bags for children',
        tag: 'bag children',
        category: '5f2871f61c89c65205fb3df1',
        colour: [
            {
                _id: '5f340878b698290017019edd',
                colour: 'col-1',
                quantity: 50,
                price: 21.3,
                discountPrice: 20.23,
                colourImage: 'product-5f340878b698290017019edc-1597245560664-col-1.jpeg',
            },
        ],
        createdAt: new Date('2020-08-12T15:19:20.553Z'),
        updatedAt: new Date('2020-08-12T15:19:21.260Z'),
        lowPrice: 21.3,
        highPrice: 21.3,
        discountedLowPrice: 20.23,
        discountedHighPrice: 20.23,
        slug: 'mickey-mouse-children-bag',
        imageCover: 'product-5f340878b698290017019edc-1597245560559-cover.jpeg',
        quantity: 50,
        id: '5f340878b698290017019edc',
    },
    {
        priceDiscountPercent: 5,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f34074db698290017019ed8-1597245261322-cover.jpeg',
            'product-5f34074db698290017019ed8-1597245261927-2.jpeg',
            'product-5f34074db698290017019ed8-1597245261927-1.jpeg',
            'product-5f34074db698290017019ed8-1597245261928-3.jpeg',
            'product-5f34074db698290017019ed8-1597245261928-4.jpeg',
        ],
        shipping: true,
        _id: '5f34074db698290017019ed8',
        name: 'Female Children Bag',
        description: 'Beautiful, colourful and exciting bags for children',
        tag: 'bag children',
        category: '5f2871f61c89c65205fb3df1',
        colour: [
            {
                _id: '5f34074db698290017019ed9',
                colour: 'brown',
                quantity: 50,
                price: 21.3,
                discountPrice: 20.23,
                colourImage: 'product-5f34074db698290017019ed8-1597245261636-brown.jpeg',
            },
        ],
        createdAt: new Date('2020-08-12T15:14:21.300Z'),
        updatedAt: new Date('2020-08-12T15:14:22.948Z'),
        lowPrice: 21.3,
        highPrice: 21.3,
        discountedLowPrice: 20.23,
        discountedHighPrice: 20.23,
        slug: 'female-children-bag',
        imageCover: 'product-5f34074db698290017019ed8-1597245261322-cover.jpeg',
        quantity: 50,
        id: '5f34074db698290017019ed8',
    },
    {
        priceDiscountPercent: 5,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f33f9222474270017aebcd8-1597241634493-cover.jpeg',
            'product-5f33f9222474270017aebcd8-1597241634816-1.jpeg',
            'product-5f33f9222474270017aebcd8-1597241634826-4.jpeg',
            'product-5f33f9222474270017aebcd8-1597241634818-2.jpeg',
            'product-5f33f9222474270017aebcd8-1597241634825-3.jpeg',
        ],
        shipping: true,
        _id: '5f33f9222474270017aebcd8',
        name: 'Camp Travel bag',
        description: 'Your best travel conpanion, to help you carry and manage your stuffs',
        tag: 'bag travel camp',
        category: '5f2871e31c89c65205fb3df0',
        colour: [
            {
                _id: '5f33f9222474270017aebcd9',
                colour: 'gray',
                quantity: 50,
                price: 36.2,
                discountPrice: 34.39,
                colourImage: 'product-5f33f9222474270017aebcd8-1597241634641-gray.jpeg',
            },
            {
                _id: '5f33f96d2474270017aebcda',
                colour: 'brown',
                quantity: 40,
                price: 63.5,
                colourImage: 'product-5f33f9222474270017aebcd8-1597241709672-brown.jpeg',
                discountPrice: 60.33,
            },
        ],
        specification: {
            model: 'Brown, Gray',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T14:13:54.475Z'),
        updatedAt: new Date('2020-08-12T14:15:09.784Z'),
        lowPrice: 36.2,
        highPrice: 63.5,
        discountedLowPrice: 34.39,
        discountedHighPrice: 60.33,
        slug: 'camp-travel-bag',
        imageCover: 'product-5f33f9222474270017aebcd8-1597241634493-cover.jpeg',
        quantity: 90,
        id: '5f33f9222474270017aebcd8',
    },
    {
        priceDiscountPercent: 0,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f33f5112474270017aebcd5-1597240593869-cover.jpeg',
            'product-5f33f5112474270017aebcd5-1597240594564-3.jpeg',
            'product-5f33f5112474270017aebcd5-1597240594558-2.jpeg',
            'product-5f33f5112474270017aebcd5-1597240594564-4.jpeg',
            'product-5f33f5112474270017aebcd5-1597240594557-1.jpeg',
        ],
        shipping: true,
        _id: '5f33f5112474270017aebcd5',
        name: 'New arrival Travel Leather bag',
        description: 'Your best travel conpanion, to help you carry and manage your stuffs',
        tag: 'bag travel',
        category: '5f2871e31c89c65205fb3df0',
        colour: [
            {
                _id: '5f33f5112474270017aebcd6',
                colour: 'black',
                quantity: 50,
                price: 63.5,
                discountPrice: 63.5,
                colourImage: 'product-5f33f5112474270017aebcd5-1597240594178-black.jpeg',
            },
            {
                _id: '5f33f5d32474270017aebcd7',
                colour: 'brown',
                quantity: 35,
                price: 63.5,
                colourImage: 'product-5f33f5112474270017aebcd5-1597240787275-brown.jpeg',
                discountPrice: 63.5,
            },
        ],
        specification: {
            model: 'Brown, Black',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T13:56:33.861Z'),
        updatedAt: new Date('2020-08-12T13:59:47.429Z'),
        lowPrice: 63.5,
        highPrice: 63.5,
        discountedLowPrice: 63.5,
        discountedHighPrice: 63.5,
        slug: 'new-arrival-travel-leather-bag',
        imageCover: 'product-5f33f5112474270017aebcd5-1597240593869-cover.jpeg',
        quantity: 85,
        id: '5f33f5112474270017aebcd5',
    },
    {
        priceDiscountPercent: 15,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f33eccb2474270017aebccf-1597238476010-cover.jpeg',
            'product-5f33eccb2474270017aebccf-1597238476325-4.jpeg',
            'product-5f33eccb2474270017aebccf-1597238476324-1.jpeg',
            'product-5f33eccb2474270017aebccf-1597238476325-2.jpeg',
            'product-5f33eccb2474270017aebccf-1597238476325-3.jpeg',
        ],
        shipping: true,
        _id: '5f33eccb2474270017aebccf',
        name: 'Best Travel Leather bag',
        description: 'Your best travel conpanion, to help you carry and manage your stuffs',
        tag: 'bag travel',
        category: '5f2871e31c89c65205fb3df0',
        colour: [
            {
                _id: '5f33eccb2474270017aebcd0',
                colour: 'blue',
                quantity: 45,
                price: 51,
                discountPrice: 43.35,
                colourImage: 'product-5f33eccb2474270017aebccf-1597238476196-blue.jpeg',
            },
            {
                _id: '5f33ed312474270017aebcd2',
                colour: 'black',
                quantity: 35,
                price: 50,
                colourImage: 'product-5f33eccb2474270017aebccf-1597238576909-black.jpeg',
                discountPrice: 42.5,
            },
            {
                _id: '5f33f4432474270017aebcd4',
                colour: 'brown',
                quantity: 35,
                price: 50,
                colourImage: 'product-5f33eccb2474270017aebccf-1597240386996-brown.jpeg',
                discountPrice: 42.5,
            },
        ],
        specification: {
            model: 'Brown, Black',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T13:21:15.998Z'),
        updatedAt: new Date('2020-08-12T13:53:07.477Z'),
        lowPrice: 50,
        highPrice: 51,
        discountedLowPrice: 42.5,
        discountedHighPrice: 43.35,
        slug: 'best-travel-leather-bag',
        imageCover: 'product-5f33eccb2474270017aebccf-1597238476010-cover.jpeg',
        quantity: 115,
        id: '5f33eccb2474270017aebccf',
    },
    {
        priceDiscountPercent: 15,
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        sales: 0,
        images: [
            'product-5f33a0d6aa1b520017dfcd0f-1597219030727-cover.jpeg',
            'product-5f33a0d6aa1b520017dfcd0f-1597219031138-1.jpeg',
            'product-5f33a0d6aa1b520017dfcd0f-1597219031138-2.jpeg',
            'product-5f33a0d6aa1b520017dfcd0f-1597219031139-3.jpeg',
        ],
        shipping: true,
        _id: '5f33a0d6aa1b520017dfcd0f',
        name: 'Fine Quality travel Leather bag',
        description: 'Your best travel conpanion, to help you carry and manage your stuffs',
        tag: 'bag travel',
        category: '5f2871e31c89c65205fb3df0',
        colour: [
            {
                _id: '5f33a0d6aa1b520017dfcd10',
                colour: 'brown',
                quantity: 80,
                price: 42.3,
                discountPrice: 35.95,
                colourImage: 'product-5f33a0d6aa1b520017dfcd0f-1597219030962-brown.jpeg',
            },
        ],
        specification: {
            model: 'Brown, Black',
            material: 'Leather',
            shipping: 'true',
        },
        createdAt: new Date('2020-08-12T07:57:10.714Z'),
        updatedAt: new Date('2020-08-12T13:28:18.530Z'),
        lowPrice: 42.3,
        highPrice: 42.3,
        discountedLowPrice: 35.95,
        discountedHighPrice: 35.95,
        slug: 'fine-quality-travel-leather-bag',
        imageCover: 'product-5f33a0d6aa1b520017dfcd0f-1597219030727-cover.jpeg',
        quantity: 80,
        id: '5f33a0d6aa1b520017dfcd0f',
    },
];


/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _errors_404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors/404.component */ "./src/app/errors/404.component.ts");
/* harmony import */ var _products_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/index */ "./src/app/products/index.ts");


const appRoutes = [
    { path: '404', component: _errors_404_component__WEBPACK_IMPORTED_MODULE_0__["Error404Component"] },
    {
        path: 'products/create',
        component: _products_index__WEBPACK_IMPORTED_MODULE_1__["CreateProductComponent"],
        canDeactivate: ['canDeactivateCreateProduct'],
    },
    {
        path: 'products',
        component: _products_index__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"],
        resolve: { products: _products_index__WEBPACK_IMPORTED_MODULE_1__["ProductsListResolver"] },
    },
    {
        path: 'products/:id',
        component: _products_index__WEBPACK_IMPORTED_MODULE_1__["ProductDetailsComponent"],
        canActivate: [_products_index__WEBPACK_IMPORTED_MODULE_1__["ProductRouteActivator"]],
        resolve: { products: _products_index__WEBPACK_IMPORTED_MODULE_1__["ProductsListResolver"] },
    },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
];


/***/ }),

/***/ "./src/app/user/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






class AuthService {
    constructor(http) {
        this.http = http;
        // private domain: string = 'https://jtlfashion.herokuapp.com';
        this.domain = "http://127.0.0.1:4000";
        this.loginUrl = `${this.domain}/api/v1/user/login`;
    }
    loginUser(email, password) {
        // document.cookie = 'jwtw=MyJtwtest'
        // console.log(email, password);
        let loginInfo = { email: email, password: password };
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" }), withCredentials: true,
            observe: 'response',
        };
        return this.http
            .post(this.loginUrl, loginInfo, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(data => {
            // this.cookieService.set("jwt", data.token, 30);
            this.currentUser = data.body.data.user;
            console.log(data);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).subscribe(data => {
            const keys = data.headers.keys();
        });
        // this.currentUser = {
        //   emailConfirm: true,
        //   photo: 'default.jpeg',
        //   role: 'user',
        //   wishList: [],
        //   _id: '5f0f2401d8ce7fc4ec9098a0',
        //   cart: [],
        //   tel: 8094350606,
        //   gender: 'Male',
        //   name: 'Jude Nambal',
        //   email: 'jnambal@gmail.com',
        //   createdAt: new Date('2020-07-15T15:42:57.724Z'),
        //   updatedAt: new Date('2020-08-02T12:11:29.071Z'),
        //   interest: 'Food Nam Love',
        //   contactAddress: [],
        //   id: '5f0f2401d8ce7fc4ec9098a0',
        // };
    }
    isAuthenticated() {
        return !!this.currentUser;
    }
    updateCurrentUser(userData) {
        this.currentUser.name = userData.name;
        this.currentUser.tel = userData.phone;
        this.currentUser.gender = userData.gender;
        // console.log(userData);
    }
    handleError(err) {
        let errorMessage = "";
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/user/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function LoginComponent_em_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_em_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authServie, route) {
        this.authServie = authServie;
        this.route = route;
    }
    login(formData) {
        this.authServie.loginUser(formData.email, formData.password);
        this.route.navigate(['products']);
    }
    cancel() {
        this.route.navigate(['products']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], decls: 26, vars: 3, consts: [[1, "main"], [1, "login__section"], ["autocomplete", "off", "novalidate", "", 1, "form--login", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["for", "email"], [4, "ngIf"], ["name", "email", "required", "", "id", "email", "type", "text", "placeholder", "you@example.com", 1, "form-control", 3, "ngModel"], ["for", "password"], ["required", "", "name", "password", "id", "password", "type", "password", "placeholder", "Password...", 1, "form-control", 3, "ngModel"], [1, "forgor--password"], [3, "mouseenter", "mouseleave"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "signup--link"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log into your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.login(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_em_10_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function LoginComponent_Template_input_ngModel_11_listener() { return ctx.email; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_em_15_Template, 2, 0, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function LoginComponent_Template_input_ngModel_16_listener() { return ctx.password; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Forgot Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function LoginComponent_Template_span_mouseenter_19_listener() { return ctx.mouseoverLogin = true; })("mouseleave", function LoginComponent_Template_span_mouseleave_19_listener() { return ctx.mouseoverLogin = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Sign up for Zola ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.email == null ? null : _r0.controls.email.invalid) && ((_r0.controls.email == null ? null : _r0.controls.email.touched) || ctx.mouseoverLogin));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.password == null ? null : _r0.controls.password.invalid) && ((_r0.controls.password == null ? null : _r0.controls.password.touched) || ctx.mouseoverLogin));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  height: 85vh;\n}\n\n.login__section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38rem;\n  height: 70rem;\n  top: 50%;\n  left: 50%;\n  padding: 1rem 0;\n  transform: translateX(-50%) translateY(-50%);\n  background-color: #d8e9f9;\n}\n\n.form--login[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  width: 30rem;\n  margin: 2rem auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\n.form-group[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  align-self: center;\n  font-size: 1.5rem;\n  color: var(--color-secondary);\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 4rem;\n  outline: none;\n  border: none;\n  border-bottom: solid blue 2px;\n  flex-basis: 100%;\n  flex-shrink: 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 30rem;\n  height: 4rem;\n  margin: 3rem 0;\n}\n\n.forgor--password[_ngcontent-%COMP%], .signup--link[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFFQSw0Q0FBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFFRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQUZKOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUpKOztBQVFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7O0VBRUUsaUJBQUE7RUFDQSw2QkFBQTtBQUxGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogODV2aDtcclxufVxyXG5cclxuLmxvZ2luX19zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDM4cmVtO1xyXG4gIGhlaWdodDogNzByZW07XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuICAvLyAgIGhlaWdodDogMTAwdmg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3I6ICMxZTc2Y2UsICRhbW91bnQ6IDQ1KTtcclxufVxyXG5cclxuLmZvcm0tLWxvZ2luIHtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICB3aWR0aDogMzByZW07XHJcbiAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICBlbSB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBibHVlIDJweDtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAzMHJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbn1cclxuXHJcbi5mb3Jnb3ItLXBhc3N3b3JkLFxyXG4uc2lnbnVwLS1saW5rIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/profile.component.ts":
/*!*******************************************!*\
  !*** ./src/app/user/profile.component.ts ***!
  \*******************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ProfileComponent_em_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_em_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Must start with a letter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { error: a0 }; };
class ProfileComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.authService.currentUser.name, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z].*'),
        ]);
        this.gender = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.authService.currentUser.gender);
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.authService.currentUser.tel);
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: this.name,
            gender: this.gender,
            phone: this.phone,
        });
    }
    updateProfile(formValue) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValue);
            this.router.navigate(['/products']);
        }
    }
    validateName() {
        return this.name.valid || this.name.untouched;
    }
    validatePhone() {
        return this.phone.valid || this.phone.untouched;
    }
    cancel() {
        this.router.navigate(['/products']);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["ng-component"]], decls: 27, vars: 12, consts: [[1, "main"], [1, "user--profile__update--section"], ["autocomplete", "off", 1, "form--profile", 3, "formGroup", "ngSubmit"], [1, "form-group", 3, "ngClass"], ["for", "name"], [4, "ngIf"], ["formControlName", "name", "id", "name", "type", "text", "placeholder", "John Doe", 1, "form-control"], [1, "form-group"], ["for", "gender"], ["formControlName", "gender", "id", "gender"], ["value", "", 3, "selected"], ["value", "Male", 3, "selected"], ["value", "Female", 3, "selected"], ["for", "phone"], ["formControlName", "phone", "minlength", "4", "maxlength", "13", "id", "phone", "type", "tel", "placeholder", "Phone Number...", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_2_listener() { return ctx.updateProfile(ctx.profileForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_em_6_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_em_7_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Update Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_25_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, !ctx.validateName()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.validateName() && ctx.profileForm.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.validateName() && ctx.profileForm.controls.name.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.profileForm.value.gender === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.profileForm.value.gender === "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.profileForm.value.gender === "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, !ctx.validatePhone()));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  height: 85vh;\n}\n\n.user--profile__update--section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38rem;\n  height: 70rem;\n  top: 50%;\n  left: 50%;\n  padding: 1rem 0;\n  transform: translateX(-50%) translateY(-50%);\n  background-color: #d8e9f9;\n}\n\n.form--profile[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  width: 30rem;\n  margin: 2rem auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\n.form-group[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  align-self: center;\n  font-size: 1.5rem;\n  color: var(--color-secondary);\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 4rem;\n  outline: none;\n  border: none;\n  border-bottom: solid blue 2px;\n  flex-basis: 100%;\n  flex-shrink: 0;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n\n.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #e3c3c5;\n}\n\n.error[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #999;\n}\n\n.error[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #999;\n}\n\n.error[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #999;\n}\n\n.error[_ngcontent-%COMP%]:-ms-fullscreen {\n  color: #999;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 30rem;\n  height: 4rem;\n  margin: 3rem 0;\n}\n\n.forgor--password[_ngcontent-%COMP%], .signup--link[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUVBLDRDQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUVFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQURGOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBRko7O0FBS0U7O0VBRUUsaUJBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU1JOztFQUNFLFlBQUE7QUFITjs7QUFTRTtFQUNFLHlCQUFBO0FBTko7O0FBU0U7RUFDRSxXQUFBO0FBUEo7O0FBU0U7RUFDRSxXQUFBO0FBUEo7O0FBU0U7RUFDRSxXQUFBO0FBUEo7O0FBU0U7RUFDRSxXQUFBO0FBUEo7O0FBV0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFSRjs7QUFXQTs7RUFFRSxpQkFBQTtFQUNBLDZCQUFBO0FBUkYiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDg1dmg7XHJcbn1cclxuXHJcbi51c2VyLS1wcm9maWxlX191cGRhdGUtLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzhyZW07XHJcbiAgaGVpZ2h0OiA3MHJlbTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIC8vICAgaGVpZ2h0OiAxMDB2aDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvcjogIzFlNzZjZSwgJGFtb3VudDogNDUpO1xyXG59XHJcblxyXG4uZm9ybS0tcHJvZmlsZSB7XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgd2lkdGg6IDMwcmVtO1xyXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgZW0ge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICB9XHJcblxyXG4gIGlucHV0LFxyXG4gIHNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGJsdWUgMnB4O1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAgIG9wdGlvbiB7XHJcbiAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzYzNjNTtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcbiAgJjotbXMtZnVsbHNjcmVlbiB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAzMHJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbn1cclxuXHJcbi5mb3Jnb3ItLXBhc3N3b3JkLFxyXG4uc2lnbnVwLS1saW5rIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.routes */ "./src/app/user/user.routes.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/user/profile.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/user/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









class UserModule {
}
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_user_routes__WEBPACK_IMPORTED_MODULE_3__["userRoutes"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_user_routes__WEBPACK_IMPORTED_MODULE_3__["userRoutes"]),
                ],
                declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/user.routes.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.routes.ts ***!
  \*************************************/
/*! exports provided: userRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/user/profile.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/user/login.component.ts");


const userRoutes = [
    { path: 'profile', component: _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"] },
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
];


/***/ }),

/***/ "./src/app/zola-app.component.ts":
/*!***************************************!*\
  !*** ./src/app/zola-app.component.ts ***!
  \***************************************/
/*! exports provided: ZolaAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZolaAppComponent", function() { return ZolaAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/header.component */ "./src/app/nav/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nav_user_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/user-navbar.component */ "./src/app/nav/user-navbar.component.ts");





class ZolaAppComponent {
    constructor() {
        this.title = 'Zola';
    }
}
ZolaAppComponent.ɵfac = function ZolaAppComponent_Factory(t) { return new (t || ZolaAppComponent)(); };
ZolaAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZolaAppComponent, selectors: [["zola-app"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "main--app"]], template: function ZolaAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "user-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _nav_user_navbar_component__WEBPACK_IMPORTED_MODULE_3__["UserNavbarComponent"]], styles: ["fa-icon[_ngcontent-%COMP%] {\n  color: green;\n  font-size: 50px;\n}\n\n.main--app[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: var(--color-tertiary);\n  min-width: 100%;\n  margin: 5rem 0 6rem;\n  padding: 0.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9sYS1hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFmRjs7QUFrQkE7RUFDRSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFmRiIsImZpbGUiOiJzcmMvYXBwL3pvbGEtYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3N0eWxlc19taXhpbnNcIjtcclxuXHJcbi8vIGZsZXgtZGlyZWN0aW9uOiByb3d8Y29sXHJcbi8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbnwuLi4uLi4uLlxyXG4vLyBhbGlnbi1pdGVtczogY2VudGVyfCBmbGV4LWVuZCBzdGFydHxzdHJldGNoID09PSBhbGlnbiBpdGVtc1xyXG4vLyBmbGV4LXdyYXA6IG5vLXdyYXB8d3JhcFxyXG4vLyBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ID09PSBhbGlnbiByb3dcclxuXHJcbi8vIGZvciBmbGV4IGl0ZW1zXHJcblxyXG4vLyBmbGVcclxuLy8gZmxleCB8IGZsZXgtZ3JvdzogMXwyfDN8NC4uLi4uLi5cclxuLy8gb3JkZXI6IC4uLi4tMnwtMXwwfDF8Mi4uLi4uXHJcbi8vIGZsZXgtc2hyaW5rIDB8MVxyXG4vLyBhbGlnbi1zZWxmOiBzdGFydHxzdHJldGNoXHJcblxyXG5mYS1pY29uIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4ubWFpbi0tYXBwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDVyZW0gMCA2cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZolaAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'zola-app',
                templateUrl: './zola-app.component.html',
                styleUrls: ['./zola-app.component.scss'],
            }]
    }], null, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\TIMOTHY.JOSEPH\Desktop\Desktop Old\Training\JTL\zola-scss\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map