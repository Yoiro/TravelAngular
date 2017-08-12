import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home.component';
import { UserComponent } from './Components/user.component';
import { UserNavbarComponent } from './Components/user.navbar.component';
import { VisitorNavbarComponent } from './Components/visitor.navbar.component';
import { AdminNavbarComponent } from './Components/admin.navbar.component';
import { routing } from './app.routing';
import { UserService } from './Service/user.service';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [AppComponent, HomeComponent, UserComponent, AdminNavbarComponent, VisitorNavbarComponent, UserNavbarComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent]
})

export class AppModule { }