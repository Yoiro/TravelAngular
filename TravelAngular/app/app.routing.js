"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./Components/home.component");
var usersm_component_1 = require("./Components/usersm.component");
var travelsm_component_1 = require("./Components/travelsm.component");
var login_component_1 = require("./Components/login.component");
var register_component_1 = require("./Components/register.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'usersm', component: usersm_component_1.UsersMComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'travelsm', component: travelsm_component_1.TravelsMComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: '**', redirectTo: 'home' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map