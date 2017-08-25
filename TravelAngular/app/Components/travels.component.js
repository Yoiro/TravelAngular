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
var travel_service_1 = require("../Service/travel.service");
var global_1 = require("../shared/global");
var address_service_1 = require("../Service/address.service");
var user_service_1 = require("../Service/user.service");
var auth_service_1 = require("../Service/auth.service");
var TravelsComponent = (function () {
    function TravelsComponent(_travelService, _addressService, _userService, _authService) {
        this._travelService = _travelService;
        this._addressService = _addressService;
        this._userService = _userService;
        this._authService = _authService;
        this.LoadUsers();
    }
    TravelsComponent.prototype.LoadUsers = function () {
        var _this = this;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT).
            subscribe(function (users) { return _this.users = users; }, null, function () { return _this.LoadAddresses(); });
    };
    TravelsComponent.prototype.LoadAddresses = function () {
        var _this = this;
        this._addressService.get(global_1.Global.BASE_ADDRESS_ENDPOINT).
            subscribe(function (addresses) { return _this.addresses = addresses; }, null, function () { return _this.LoadTravels(); });
    };
    TravelsComponent.prototype.LoadTravels = function () {
        var _this = this;
        this._travelService.get(global_1.Global.BASE_TRAVEL_ENDPOINT).
            subscribe(function (travels) { return _this.travels = travels; });
    };
    TravelsComponent.prototype.subscribeToTravel = function (id) {
        var _this = this;
        console.log(this.travels[id - 1].Places, "Subscribed!");
        var travelToSubscribe;
        this._travelService.get(global_1.Global.BASE_TRAVEL_ENDPOINT + "/" + id).subscribe(function (travel) { return travelToSubscribe = travel; }, null, function () {
            var log;
            _this._authService.logged$.subscribe(function (logged$) { return log = logged$; }, null, function () {
                if (log) {
                    travelToSubscribe.Places -= 1;
                    var user;
                    _this._authService.loggedUser$.subscribe(function (usr) { return user = usr; }, null, function () {
                    });
                }
            });
        });
    };
    return TravelsComponent;
}());
TravelsComponent = __decorate([
    core_1.Component({
        templateUrl: "./Templates/travels.component.html"
    }),
    __metadata("design:paramtypes", [travel_service_1.TravelService, address_service_1.AddressService, user_service_1.UserService, auth_service_1.AuthenticationService])
], TravelsComponent);
exports.TravelsComponent = TravelsComponent;
//# sourceMappingURL=travels.component.js.map