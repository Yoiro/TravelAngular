import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { AuthenticationService } from '../Service/auth.service';
import { IUser } from '../Models/user';
import { Router } from '@angular/router';
import { Global } from '../shared/global';

@Component({
    templateUrl: './Templates/login.component.html'
})
export class LoginComponent implements OnInit {
    //Properties
    logForm: FormGroup;
    users: IUser[];
    msg: string;
    un: string;
    pw: string;

    //Override
    ngOnInit(): void {
        this.logForm = this.fb.group({
            Username: ['', Validators.required],
            Password: ['', Validators.required]
        });
    }

    constructor(private fb: FormBuilder, private _userService: UserService,
        private _authService: AuthenticationService, private _router: Router) { }

    //Methods
    /**
     * Redirecting to Index
     */
    redirectIndex() {
        this._router.navigate(['']);
    }

    /**
     * Load users from API
     */
    LoadUsers(): void {
        this._userService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(users => { this.users = users },
            error => this.msg = <any>error);
    }

    /**
     * Checks if values corresponds on form's submit
     */
    onSubmit() {
        this._authService.login(this.un, this.pw);
        this.redirectIndex();
    }
}