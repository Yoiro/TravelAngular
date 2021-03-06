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
var user_service_1 = require("../Service/user.service");
var auth_service_1 = require("../Service/auth.service");
var travel_service_1 = require("../Service/travel.service");
var reservation_service_1 = require("../Service/reservation.service");
var global_1 = require("../shared/global");
var router_1 = require("@angular/router");
var UserComponent = (function () {
    function UserComponent(_userService, _authService, _travelService, _resService, route) {
        this._userService = _userService;
        this._authService = _authService;
        this._travelService = _travelService;
        this._resService = _resService;
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.id = +params['id']; }, null, function () { return _this.LoadUser(); });
    };
    UserComponent.prototype.LoadUser = function () {
        var _this = this;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT + this.id).subscribe(function (result) { return _this.user = result; });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        templateUrl: './Templates/user.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthenticationService,
        travel_service_1.TravelService,
        reservation_service_1.ReservationService,
        router_1.ActivatedRoute])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map