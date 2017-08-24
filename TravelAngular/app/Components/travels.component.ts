import { Component } from '@angular/core';
import { TravelService } from '../Service/travel.service';
import { Global } from '../shared/global';
import { ITravel } from '../Models/travel';
import { IUser } from '../Models/user';
import { IAddress } from '../Models/address';
import { AddressService } from '../Service/address.service';
import { UserService } from '../Service/user.service';
import { AuthenticationService } from '../Service/auth.service';

@Component({
    templateUrl: "./Templates/travels.component.html"
})
export class TravelsComponent {
    travels: ITravel[];
    addresses: IAddress[];
    users: IUser[];

    constructor(private _travelService: TravelService, private _addressService: AddressService, private _userService: UserService, private _authService: AuthenticationService) {
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
        console.log(this.travels[id - 1].Places, "Subscribed!");
        var travelToSubscribe: ITravel;
        this._travelService.get(Global.BASE_TRAVEL_ENDPOINT + "/" + id).subscribe(
            travel => travelToSubscribe = travel,
            null,
            () => {
                var log: boolean;
                this._authService.logged$.subscribe(logged$ => log = logged$,
                    null,
                    () => {
                        if (log) {
                            travelToSubscribe.Places -= 1;
                            var user: IUser;
                            this._authService.loggedUser$.subscribe(usr => user = usr,
                                null,
                                () => {

                                }
                            );
                        }
                    }
                );
            }
        );
    }
}