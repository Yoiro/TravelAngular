"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(fb, _router) {
        this.fb = fb;
        this._router = _router;
        this.checkPerson = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.regForm = this.fb.group({
            Username: ['', forms_1.Validators.required],
            Password: ['', forms_1.Validators.required],
            Passcheck: ['', forms_1.Validators.required],
            Personnal: [this.checkPerson]
        });
    };
    RegisterComponent.prototype.redirectIndex = function () {
        this._router.navigate(['']);
    };
    RegisterComponent.prototype.showPersonnalInfo = function () {
        console.log(this.checkPerson);
        this.personnal = this.fb.group({
            FirstName: [''],
            LastName: ['']
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        console.log("Submitting");
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        templateUrl: './Templates/register.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map