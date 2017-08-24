import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home.component';
import { UsersMComponent } from './Components/users.management.component';
import { TravelsMComponent } from './Components/travels.management.component';
import { LoginComponent } from './Components/login.component';
import { RegisterComponent } from './Components/register.component';
import { AddTravelComponent } from './Components/addtravel.component';
import { TravelsComponent } from './Components/travels.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'usersm', component: UsersMComponent },
    { path: 'login', component: LoginComponent },
    { path: 'travelsm', component: TravelsMComponent },
    { path: 'travels', component: TravelsComponent },
    //{ path: 'travel/:id', component: TravelComponent },
    //{ path: 'travels/add', component: AddTravelComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'travelsm/add', component: AddTravelComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);