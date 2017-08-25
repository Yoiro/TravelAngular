import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../Service/user.service';
import { AuthenticationService } from '../Service/auth.service';
import { TravelService } from '../Service/travel.service';
import { IUser } from '../Models/user';
import { ReservationService } from '../Service/reservation.service';
import { Global } from '../shared/global';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './Templates/user.component.html'
})
export class UserComponent implements OnInit {
    user: IUser;
    username: string
    id: number;

    ngOnInit() {
        this.route.params.subscribe(
            params => this.id = +params['id'], null, () => this.LoadUser());
    }

    constructor( private _userService: UserService,
        private _authService: AuthenticationService, 
        private _travelService: TravelService,
        private _resService: ReservationService,
        private route: ActivatedRoute)
    { }

    LoadUser() {
        this._userService.get(Global.BASE_USER_ENDPOINT + this.id).subscribe(result => this.user = result);
    }
}