import { Component } from '@angular/core';
import { TravelService } from '../Service/travel.service';
import { Global } from '../shared/global';
import { ITravel } from '../Models/travel';
import { IUser } from '../Models/user';
import { IAddress } from '../Models/address';
import { AddressService } from '../Service/address.service';
import { UserService } from '../Service/user.service';
import { AuthenticationService } from '../Service/auth.service';
import { IReservation } from '../Models/reservation';
import { ReservationService } from '../Service/reservation.service';
import 'rxjs/add/operator/toPromise';

@Component({
    templateUrl: "./Templates/travels.component.html"
})
export class TravelsComponent {
    travels: ITravel[];
    addresses: IAddress[];
    users: IUser[];
    msg: string;

    constructor(
        private _travelService: TravelService,
        private _addressService: AddressService,
        private _userService: UserService,
        private _authService: AuthenticationService,
        private _resService: ReservationService
    ) {
        this.LoadUsers();
    }

    LoadUsers() {
        this._userService.get(Global.BASE_USER_ENDPOINT).
            subscribe(users => this.users = users,
            null,
            () => this.LoadAddresses()
            );
    }

    LoadAddresses() {
        this._addressService.get(Global.BASE_ADDRESS_ENDPOINT).
            subscribe(addresses => this.addresses = addresses,
            null,
            () => this.LoadTravels()
            );
    }

    LoadTravels() {
        this._travelService.get(Global.BASE_TRAVEL_ENDPOINT).
            subscribe(travels => this.travels = travels);
    }

    subscribeToTravel(id: number) {
        var travelToSubscribe: ITravel;
        var user: IUser = JSON.parse(localStorage.getItem("user"));
        if (user == null) {
            alert("You must be logged in in order to subscribe to a travel");
            return;
        }
        this._travelService.get(Global.BASE_TRAVEL_ENDPOINT + id).toPromise()
            .then(travel => travelToSubscribe = travel)
            .then(() => {
                if (user != null) {
                    travelToSubscribe.Places -= 1;
                    if (user.Reservations == null) { user.Reservations = new Array<IReservation>(); }
                    user.Reservations.push({ UserId: user.Id, TravelId: travelToSubscribe.Id, Date: Date.now() });
                    this._resService.post(Global.BASE_RES_ENDPOINT, user.Reservations[user.Reservations.length - 1]).toPromise();
                }
            })
            .then(() => {
                this._userService.put(Global.BASE_USER_ENDPOINT, user.Id, user).
                    toPromise().then(result => this.msg = result).then(() => console.log(this.msg));
            });    
    }
}