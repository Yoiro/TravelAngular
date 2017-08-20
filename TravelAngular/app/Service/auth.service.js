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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var global_1 = require("../shared/global");
var user_service_1 = require("./user.service");
var Subject_1 = require("rxjs/Subject");
var AuthenticationService = AuthenticationService_1 = (function () {
    function AuthenticationService(http, _userService) {
        var _this = this;
        this.http = http;
        this._userService = _userService;
        //Streams
        this.logged$ = AuthenticationService_1.log.asObservable();
        this.asAdmin$ = AuthenticationService_1.admin.asObservable();
        this.loggedUser$ = AuthenticationService_1.loggedUser.asObservable();
        this.users = new Array();
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (users) { _this.users = users; });
    }
    AuthenticationService.prototype.login = function (username, password) {
        var user = this.users.find(function (u) { return u.Username === username; });
        if (user != null) {
            if (user.Password === password) {
                localStorage.setItem("user", JSON.stringify(user));
                AuthenticationService_1.log.next(true);
                if (user.Username == "simon.degreve") {
                    AuthenticationService_1.admin.next(true);
                }
                AuthenticationService_1.loggedUser.next(user);
            }
            else {
                console.log("Wrong password");
            }
        }
        else {
            console.log("Wrong username");
        }
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem("user");
        AuthenticationService_1.log.next(false);
        AuthenticationService_1.admin.next(false);
    };
    AuthenticationService.prototype.getState = function () {
        return [this.logged$, this.asAdmin$];
    };
    return AuthenticationService;
}());
//Sources
AuthenticationService.log = new Subject_1.Subject();
AuthenticationService.admin = new Subject_1.Subject();
AuthenticationService.loggedUser = new Subject_1.Subject();
AuthenticationService = AuthenticationService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
var AuthenticationService_1;
//# sourceMappingURL=auth.service.js.map