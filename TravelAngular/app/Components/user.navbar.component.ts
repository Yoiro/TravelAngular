import { Component, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../Service/auth.service';
import { IUser } from '../Models/user';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'user-navbar',
    templateUrl: './Templates/user.navbar.component.html' })
export class UserNavbarComponent implements OnDestroy {

    user: IUser;
    subscription: Subscription;

    constructor(private _authService: AuthenticationService) {
        this.subscription = this._authService.loggedUser$.subscribe(loggedUser$ => this.user = loggedUser$);
    }

    logout() {
        this._authService.logout();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}