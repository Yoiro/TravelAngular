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
var user_service_1 = require("../Service/user.service");
var address_service_1 = require("../Service/address.service");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var global_1 = require("../Shared/global");
var TravelsMComponent = (function () {
    function TravelsMComponent(fb, _userService, _addressService, _travelService) {
        this.fb = fb;
        this._userService = _userService;
        this._addressService = _addressService;
        this._travelService = _travelService;
        this.indLoading = false;
    }
    TravelsMComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (users) { _this.users = users; }, function (error) { _this.msg = error; }, function () { _this.LoadAddresses(); });
    };
    TravelsMComponent.prototype.LoadAddresses = function () {
        var _this = this;
        this._addressService.get(global_1.Global.BASE_ADDRESS_ENDPOINT)
            .subscribe(function (addresses) { _this.addresses = addresses; }, function (error) { return _this.msg = error; }, function () { _this.LoadTravels(); });
    };
    TravelsMComponent.prototype.LoadTravels = function () {
        var _this = this;
        this._travelService.get(global_1.Global.BASE_TRAVEL_ENDPOINT)
            .subscribe(function (travels) { _this.travels = travels; }, function (error) { return _this.msg = error; });
    };
    TravelsMComponent.prototype.ngOnInit = function () {
        this.travelFrm = this.fb.group({
            Id: [''],
            DriverName: ['', forms_1.Validators.required],
            OriginID: ['', forms_1.Validators.required],
            DestinationID: ['', forms_1.Validators.required],
            Departure: ['', forms_1.Validators.required]
        });
        this.LoadUsers();
    };
    return TravelsMComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], TravelsMComponent.prototype, "modal", void 0);
TravelsMComponent = __decorate([
    core_1.Component({
        templateUrl: './Templates/travels.management.component.html',
        providers: [user_service_1.UserService, address_service_1.AddressService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        user_service_1.UserService,
        address_service_1.AddressService,
        travel_service_1.TravelService])
], TravelsMComponent);
exports.TravelsMComponent = TravelsMComponent;
//# sourceMappingURL=travels.management.component.js.map