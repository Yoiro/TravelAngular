import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { IUser } from '../Models/user';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';

@Component({
    templateUrl: 'app/Components/Templates/usersm.component.html'
})
export class UsersMComponent implements OnInit {

    ngOnInit(): void {
        this.LoadUsers();
    }

    users: IUser[];
    user: IUser;
    msg: string;
    indLoading: boolean = false;
    dbops: DBOperation;

    constructor(private _userService: UserService) { }

    LoadUsers(): void {
        this.indLoading = true;
        this._userService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(users => { this.users = users; this.indLoading = false; },
            error => this.msg = <any>error);
    }

    addUser() {
        this.dbops = DBOperation.create;
    }
}