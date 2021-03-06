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
var AdminNavbarComponent = (function () {
    function AdminNavbarComponent(_authService) {
        var _this = this;
        this._authService = _authService;
        this.subscription = this._authService.loggedUser$.subscribe(function (usr) { return _this.user = usr; });
    }
    AdminNavbarComponent.prototype.logout = function () {
        this._authService.logout();
    };
    AdminNavbarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return AdminNavbarComponent;
}());
AdminNavbarComponent = __decorate([
    core_1.Component({
        selector: 'admin-navbar',
        templateUrl: './Templates/admin.navbar.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthenticationService])
], AdminNavbarComponent);
exports.AdminNavbarComponent = AdminNavbarComponent;
//# sourceMappingURL=admin.navbar.component.js.map