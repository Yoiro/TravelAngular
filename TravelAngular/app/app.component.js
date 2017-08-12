"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var visitor_navbar_component_1 = require("./Components/visitor.navbar.component");
var user_navbar_component_1 = require("./Components/user.navbar.component");
var admin_navbar_component_1 = require("./Components/admin.navbar.component");
var AppComponent = (function () {
    function AppComponent() {
        this.logged = false;
        this.asAdmin = false;
        this.visitor = new visitor_navbar_component_1.VisitorNavbarComponent();
        this.user = new user_navbar_component_1.UserNavbarComponent();
        this.admin = new admin_navbar_component_1.AdminNavbarComponent();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "travel-app",
        templateUrl: 'app/app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map