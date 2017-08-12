﻿import { Component } from "@angular/core"
import { Routes } from '@angular/router';
import { VisitorNavbarComponent } from './Components/visitor.navbar.component';
import { UserNavbarComponent } from './Components/user.navbar.component';
import { AdminNavbarComponent } from './Components/admin.navbar.component';

@Component({
    selector: "travel-app",
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    logged: boolean = false;
    asAdmin: boolean = false;
}