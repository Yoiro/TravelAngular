import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home.component';
import { UsersMComponent } from './Components/usersm.component';
import { TravelsMComponent } from './Components/travelsm.component';
import { UserNavbarComponent } from './Components/user.navbar.component';
import { VisitorNavbarComponent } from './Components/visitor.navbar.component';
import { AdminNavbarComponent } from './Components/admin.navbar.component';
import { LoaderComponent } from './Components/loader.component';
import { LoginComponent } from './Components/login.component';
import { RegisterComponent } from './Components/register.component';
import { AddressComponent } from './Components/address.component';
import { routing } from './app.routing';
import { UserService } from './Service/user.service';
import { LoaderService } from './Service/loader.service';
import { AuthenticationService } from './Service/auth.service';
import { TravelService } from './Service/travel.service';
import { AddressService } from './Service/address.service';
import { RegisterService } from './Service/register.service';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [
        AppComponent, HomeComponent, UsersMComponent,
        AdminNavbarComponent, VisitorNavbarComponent, UserNavbarComponent,
        LoginComponent, LoaderComponent, TravelsMComponent,
        RegisterComponent
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' },
        UserService,
        TravelService,
        LoaderService,
        AuthenticationService,
        AddressService,
        RegisterService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }