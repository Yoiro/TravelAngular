"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./Components/home.component");
var users_management_component_1 = require("./Components/users.management.component");
var travels_management_component_1 = require("./Components/travels.management.component");
var login_component_1 = require("./Components/login.component");
var register_component_1 = require("./Components/register.component");
var addtravel_component_1 = require("./Components/addtravel.component");
var travels_component_1 = require("./Components/travels.component");
var user_component_1 = require("./Components/user.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'usersm', component: users_management_component_1.UsersMComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'travelsm', component: travels_management_component_1.TravelsMComponent },
    { path: 'travels', component: travels_component_1.TravelsComponent },
    { path: 'users/:id', component: user_component_1.UserComponent },
    { path: 'travels/add', component: addtravel_component_1.AddTravelComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'travelsm/add', component: addtravel_component_1.AddTravelComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map