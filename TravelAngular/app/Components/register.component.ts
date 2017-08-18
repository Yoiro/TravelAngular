import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../Service/register.service';
import { AddressComponent } from './address.component';

@Component({
    templateUrl: './Templates/register.component.html'
})
export class RegisterComponent implements OnInit {

    regForm: FormGroup;
    personnal: FormGroup;
    checkPerson: boolean = false;

    constructor(private fb: FormBuilder, private _router: Router) { }
    
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
        console.log("Submitting");
    }
}