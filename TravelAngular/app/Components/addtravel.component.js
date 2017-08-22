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
var travel_service_1 = require("../Service/travel.service");
var address_service_1 = require("../Service/address.service");
var forms_1 = require("@angular/forms");
var Global_1 = require("../shared/Global");
var router_1 = require("@angular/router");
var AddTravelComponent = (function () {
    function AddTravelComponent(fb, _travelService, _authenticationService, _addressService, _router) {
        this.fb = fb;
        this._travelService = _travelService;
        this._authenticationService = _authenticationService;
        this._addressService = _addressService;
        this._router = _router;
        this.origin = {};
        this.destination = {};
        this.driver = JSON.parse(localStorage.getItem("user"));
    }
    AddTravelComponent.prototype.ngOnInit = function () {
        this.travelForm = this.fb.group({
            OriginRoad: ['', forms_1.Validators.required],
            OriginNumber: ['', forms_1.Validators.required],
            OriginCity: ['', forms_1.Validators.required],
            OriginZipcode: ['', forms_1.Validators.required],
            OriginCountry: ['', forms_1.Validators.required],
            DestinationRoad: ['', forms_1.Validators.required],
            DestinationNumber: ['', forms_1.Validators.required],
            DestinationCity: ['', forms_1.Validators.required],
            DestinationZipcode: ['', forms_1.Validators.required],
            DestinationCountry: ['', forms_1.Validators.required],
            Date: ['', forms_1.Validators.required],
            Time: ['', forms_1.Validators.required],
            Escales: [false, forms_1.Validators.required],
            Places: [0, forms_1.Validators.required]
        });
    };
    AddTravelComponent.prototype.redirectToIndex = function () {
        this._router.navigate(['']);
    };
    AddTravelComponent.prototype.onSubmit = function () {
        if (this.driver == null) {
            alert("You must be logged in in order to post travels");
            return;
        }
        //Assign origin address
        this.origin.Country = this.travelForm.get("OriginCountry").value;
        this.origin.Locality = this.travelForm.get("OriginCity").value;
        this.origin.Num = this.travelForm.get("OriginNumber").value;
        this.origin.Road = this.travelForm.get("OriginRoad").value;
        this.origin.Zipcode = this.travelForm.get("OriginZipcode").value;
        //Assign destination address
        this.destination.Country = this.travelForm.get("DestinationCountry").value;
        this.destination.Num = this.travelForm.get("DestinationNumber").value;
        this.destination.Road = this.travelForm.get("DestinationRoad").value;
        this.destination.Zipcode = this.travelForm.get("DestinationZipcode").value;
        this.destination.Locality = this.travelForm.get("DestinationCity").value;
        //assign date & time of departure
        var re = /(\/+)|(\-+)|(\\+)/g;
        var date = this.travelForm.get("Date").value.toString().replace(re, "-");
        var time = this.travelForm.get("Time").value.toString();
        var dateTime = new Date(date + " " + time);
        console.log(dateTime);
        //post everything
        this.travel = {
            Origin: this.origin,
            Departure: dateTime,
            Destination: this.destination,
            Driver: this.driver,
            Escales: this.travelForm.get("Escales").value,
            Places: this.travelForm.get("Places").value
        };
        this._travelService.post(Global_1.Global.BASE_TRAVEL_ENDPOINT, this.travel);
        /*this._addressService.post(Global.BASE_ADDRESS_ENDPOINT, this.origin);
        this._addressService.post(Global.BASE_ADDRESS_ENDPOINT, this.destination);
        */
        this.redirectToIndex();
    };
    return AddTravelComponent;
}());
AddTravelComponent = __decorate([
    core_1.Component({
        templateUrl: './Templates/addtravel.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        travel_service_1.TravelService,
        auth_service_1.AuthenticationService,
        address_service_1.AddressService,
        router_1.Router])
], AddTravelComponent);
exports.AddTravelComponent = AddTravelComponent;
//# sourceMappingURL=addtravel.component.js.map