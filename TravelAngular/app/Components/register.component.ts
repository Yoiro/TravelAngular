import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../Service/register.service';
import { AddressComponent } from './address.component';
import { IUser } from '../Models/user';

@Component({
    templateUrl: './Templates/register.component.html'
})
export class RegisterComponent implements OnInit {

    regForm: FormGroup;
    personnal: FormGroup;
    user: IUser;
    checkPerson: boolean = false;

    constructor(private fb: FormBuilder, private _router: Router, private _registerService: RegisterService) { }
    
    ngOnInit(): void {
        this.regForm = this.fb.group({
            Username: ['', Validators.required],
            Password: ['', Validators.required],
            Passcheck: ['', Validators.required],
            Personnal: [this.checkPerson]
        });
    }

    redirectIndex() {
        this._router.navigate(['']);
    }

    showPersonnalInfo(): void {
        console.log(this.checkPerson);
        this.personnal = this.fb.group({
            FirstName: [''],
            LastName: ['']
        });
    }

    onSubmit() {
        this.user.Username = this.regForm.get("Username").value;
        this.user.Password = this.regForm.get("Password").value;
        if (this.checkPerson) {
            this.user.FirstName = this.personnal.get("FirstName").value;
            this.user.LastName = this.personnal.get("LastName").value;
        }
        if (this.regForm.get("Passcheck").value === this.regForm.get("Password").value) {
            //this._registerService.register();
        }
        else {
            console.log("Registration error");
        }
    }
}