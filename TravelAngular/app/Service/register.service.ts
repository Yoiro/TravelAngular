import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AbstractControl } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegisterService {
    constructor(private _http: Http) { }

    passwordValidation(AC: AbstractControl): boolean {
        let password = AC.get('Password').value
        let check = AC.get('Passcheck').value
        if (password != check) {
            return false;
        }
        return true;
    }
}