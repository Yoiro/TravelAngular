import { Component, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../Service/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { IUser } from '../Models/user';

@Component({
    selector: 'admin-navbar',
    templateUrl: './Templates/admin.navbar.component.html'
})
export class AdminNavbarComponent implements OnDestroy {

    user: IUser;
    subscription: Subscription;

    constructor(private _authService: AuthenticationService) {
        this.subscription = this._authService.loggedUser$.subscribe(usr => this.user = usr);
    }
    
    logout(){
        this._authService.logout();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}