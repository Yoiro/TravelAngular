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
var address_service_1 = require("../Service/address.service");
var AddressComponent = (function () {
    function AddressComponent(fb, _addressService) {
        this.fb = fb;
        this._addressService = _addressService;
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.addGroup = this.fb.group({
            Road: [''],
            Number: [''],
            City: [''],
            Zipcode: [''],
            Country: ['']
        });
    };
    return AddressComponent;
}());
AddressComponent = __decorate([
    core_1.Component({
        selector: 'address',
        templateUrl: './Templates/address.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, address_service_1.AddressService])
], AddressComponent);
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map