import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Global } from '../shared/global';
import { UserService } from './user.service';
import { IUser } from '../Models/user';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService{
    users: IUser[];
    //Sources
    private static log = new Subject<boolean>();
    private static admin = new Subject<boolean>();
    private static loggedUser = new Subject<IUser>();
    //Streams
    logged$ = AuthenticationService.log.asObservable();
    asAdmin$ = AuthenticationService.admin.asObservable();
    loggedUser$ = AuthenticationService.loggedUser.asObservable();

    constructor(private http: Http, private _userService: UserService) {
        this.users = new Array<IUser>();
        this._userService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(users => { this.users = users });
    }

    login(username: string, password: string) {
        var user = this.users.find(u => u.Username === username);
        if (user != null) {
            if (user.Password === password) {
                localStorage.setItem("user", JSON.stringify(user));
                AuthenticationService.log.next(true);
                if (user.Username == "simon.degreve") {
                    AuthenticationService.admin.next(true);
                }
                AuthenticationService.loggedUser.next(user);
            }
            else { console.log("Wrong password"); }
        }
        else { console.log("Wrong username"); }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem("user");
        AuthenticationService.log.next(false);
        AuthenticationService.admin.next(false);
    }

    getState(): Observable<boolean>[] {
        return [this.logged$, this.asAdmin$];
    }
}