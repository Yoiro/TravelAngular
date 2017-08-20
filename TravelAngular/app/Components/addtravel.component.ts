import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Service/auth.service';
import { ITravel } from '../Models/travel';
import { IUser } from '../Models/user';
import { TravelService } from '../Service/travel.service';
import { AddressService } from '../Service/address.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Global } from '../shared/Global';
import { IAddress } from '../Models/address';

@Component({
    templateUrl: './Templates/addtravel.component.html'
})
export class AddTravelComponent implements OnInit {
    travel: ITravel;
    travelForm: FormGroup;
    driver: IUser;
    origin: IAddress = {};
    destination: IAddress = {};

    constructor(private fb: FormBuilder,
        private _travelService: TravelService,
        private _authenticationService: AuthenticationService,
        private _addressService: AddressService
    )
    {
        this.driver = JSON.parse(localStorage.getItem("user"));
    }

    ngOnInit() {
        this.travelForm = this.fb.group({
            OriginRoad: ['', Validators.required],
            OriginNumber: ['', Validators.required],
            OriginCity: ['', Validators.required],
            OriginZipcode: ['', Validators.required],
            OriginCountry: ['', Validators.required],
            DestinationRoad: ['', Validators.required],
            DestinationNumber: ['', Validators.required],
            DestinationCity: ['', Validators.required],
            DestinationZipcode: ['', Validators.required],
            DestinationCountry: ['', Validators.required],
            Date: ['', Validators.required],
            Time: ['', Validators.required],
            Escales: [false, Validators.required],
            Places: [0, Validators.required]
        });
        
    }

    onsubmit() {
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
        var date = new Date(this.travelForm.get("Date").value + this.travelForm.get("Time").value);
        //post everything
        this.travel = {
            Origin: this.origin,
            Departure: date,
            Destination: this.destination,
            Driver: this.driver,
            Escales: this.travelForm.get("Escales").value,
            Places: this.travelForm.get("Places").value
        };
        this._addressService.post(Global.BASE_ADDRESS_ENDPOINT, this.origin);
        this._addressService.post(Global.BASE_ADDRESS_ENDPOINT, this.destination);
        this._travelService.post(Global.BASE_TRAVEL_ENDPOINT, this.travel);
    }
}