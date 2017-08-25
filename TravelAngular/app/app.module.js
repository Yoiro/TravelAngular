"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./Components/home.component");
var users_management_component_1 = require("./Components/users.management.component");
var travels_management_component_1 = require("./Components/travels.management.component");
var user_navbar_component_1 = require("./Components/user.navbar.component");
var visitor_navbar_component_1 = require("./Components/visitor.navbar.component");
var admin_navbar_component_1 = require("./Components/admin.navbar.component");
var loader_component_1 = require("./Components/loader.component");
var login_component_1 = require("./Components/login.component");
var register_component_1 = require("./Components/register.component");
var address_component_1 = require("./Components/address.component");
var addtravel_component_1 = require("./Components/addtravel.component");
var travels_component_1 = require("./Components/travels.component");
var user_component_1 = require("./Components/user.component");
var app_routing_1 = require("./app.routing");
var user_service_1 = require("./Service/user.service");
var loader_service_1 = require("./Service/loader.service");
var auth_service_1 = require("./Service/auth.service");
var travel_service_1 = require("./Service/travel.service");
var address_service_1 = require("./Service/address.service");
var register_service_1 = require("./Service/register.service");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var reservation_service_1 = require("./Service/reservation.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing, ng2_bs3_modal_1.Ng2Bs3ModalModule],
        declarations: [
            app_component_1.AppComponent, home_component_1.HomeComponent, users_management_component_1.UsersMComponent,
            admin_navbar_component_1.AdminNavbarComponent, visitor_navbar_component_1.VisitorNavbarComponent, user_navbar_component_1.UserNavbarComponent,
            login_component_1.LoginComponent, loader_component_1.LoaderComponent, travels_management_component_1.TravelsMComponent,
            register_component_1.RegisterComponent, addtravel_component_1.AddTravelComponent, address_component_1.AddressComponent,
            travels_component_1.TravelsComponent, user_component_1.UserComponent
        ],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' },
            user_service_1.UserService,
            travel_service_1.TravelService,
            loader_service_1.LoaderService,
            auth_service_1.AuthenticationService,
            address_service_1.AddressService,
            register_service_1.RegisterService,
            reservation_service_1.ReservationService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map