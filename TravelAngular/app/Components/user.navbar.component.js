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
var auth_service_1 = require("../Service/auth.service");
var UserNavbarComponent = (function () {
    function UserNavbarComponent(_authService) {
        var _this = this;
        this._authService = _authService;
        this.subscription = this._authService.loggedUser$.subscribe(function (loggedUser$) { return _this.user = loggedUser$; });
    }
    UserNavbarComponent.prototype.logout = function () {
        this._authService.logout();
    };
    UserNavbarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return UserNavbarComponent;
}());
UserNavbarComponent = __decorate([
    core_1.Component({
        selector: 'user-navbar',
        templateUrl: './Templates/user.navbar.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthenticationService])
], UserNavbarComponent);
exports.UserNavbarComponent = UserNavbarComponent;
//# sourceMappingURL=user.navbar.component.js.map