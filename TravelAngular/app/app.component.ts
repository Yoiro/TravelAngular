import { Component, OnDestroy } from "@angular/core";
import { Routes } from '@angular/router';
import { VisitorNavbarComponent } from './Components/visitor.navbar.component';
import { UserNavbarComponent } from './Components/user.navbar.component';
import { AdminNavbarComponent } from './Components/admin.navbar.component';
import { Global } from './shared/global';
import { AuthenticationService } from './Service/auth.service';
import { AuthObserver } from './Patterns/AuthObserver';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: "travel-app",
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnDestroy {
    logged: boolean;
    asAdmin: boolean;
    subscriptionLog: Subscription;
    subscriptionAd: Subscription;

    constructor(private _authService: AuthenticationService) {
        this.subscriptionLog = this._authService.getState()[0].subscribe(log => this.logged = log);
        this.subscriptionAd = this._authService.getState()[1].subscribe(ad => this.asAdmin = ad);
        var usr = JSON.parse(localStorage.getItem("user"));
        if (usr != null) {
            this.logged = true;
            if (usr.Username == "simon.degreve") {
                this.asAdmin = true;
            }
        }
    }

    ngOnDestroy() {
        this.subscriptionLog.unsubscribe();
        this.subscriptionAd.unsubscribe();
        if (JSON.parse(localStorage.getItem("user")) != null) {
            localStorage.removeItem("user");
        }
    }
}