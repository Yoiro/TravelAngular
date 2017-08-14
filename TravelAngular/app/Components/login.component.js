"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_service_1 = require("../Service/user.service");
var router_1 = require("@angular/router");
var global_1 = require("../shared/global");
var LoginComponent = (function () {
    function LoginComponent(fb, _userService, _router) {
        this.fb = fb;
        this._userService = _userService;
        this._router = _router;
    }
    //Override
    LoginComponent.prototype.ngOnInit = function () {
        this.logForm = this.fb.group({
            Username: ['', forms_1.Validators.required],
            Password: ['', forms_1.Validators.required]
        });
    };
    //Methods
    /**
     * Redirecting to Index
     */
    LoginComponent.prototype.redirectIndex = function () {
        this._router.navigate(['']);
    };
    /**
     * Load users from API
     */
    LoginComponent.prototype.LoadUsers = function () {
        var _this = this;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (users) { _this.users = users; }, function (error) { return _this.msg = error; });
    };
    /**
     * Checks if values corresponds
     */
    LoginComponent.prototype.login = function (username, password) {
        console.log(username, password);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: './Templates/login.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map