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
var user_service_1 = require("../Service/user.service");
var enum_1 = require("../Shared/enum");
var global_1 = require("../Shared/global");
var UsersMComponent = (function () {
    function UsersMComponent(_userService) {
        this._userService = _userService;
        this.indLoading = false;
    }
    UsersMComponent.prototype.ngOnInit = function () {
        this.LoadUsers();
    };
    UsersMComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (users) { _this.users = users; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    UsersMComponent.prototype.addUser = function () {
        this.dbops = enum_1.DBOperation.create;
    };
    return UsersMComponent;
}());
UsersMComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/Templates/usersm.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersMComponent);
exports.UsersMComponent = UsersMComponent;
//# sourceMappingURL=usersm.component.js.map