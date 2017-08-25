import { Component, OnDestroy, Input } from '@angular/core';
import { AuthenticationService } from '../Service/auth.service';
import { IUser } from '../Models/user';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-navbar',
    templateUrl: './Templates/user.navbar.component.html'
})
export class UserNavbarComponent implements OnDestroy {
    user: IUser;
    dataAvailable: boolean;

    constructor(private _authService: AuthenticationService, private route: ActivatedRoute) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    logout() {
        this._authService.logout();
    }

    ngOnDestroy() {
    }

}