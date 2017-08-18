import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home.component';
import { UsersMComponent } from './Components/usersm.component';
import { TravelsMComponent } from './Components/travelsm.component';
import { LoginComponent } from './Components/login.component';
import { RegisterComponent } from './Components/register.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'usersm', component: UsersMComponent },
    { path: 'login', component: LoginComponent },
    { path: 'travelsm', component: TravelsMComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);