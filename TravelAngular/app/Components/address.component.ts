import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressService } from '../Service/address.service';

@Component({
    selector: 'address',
    templateUrl: './Templates/address.component.html'
})
export class AddressComponent implements OnInit {
    ngOnInit(): void {
        this.addGroup = this.fb.group({
            Road: [''],
            Number: [''],
            City: [''],
            Zipcode: [''],
            Country: ['']
        });
    }

    constructor(private fb: FormBuilder, private _addressService: AddressService){ }
    addGroup: FormGroup;

    submit(): void {
        console.log(this.addGroup.get("Road"));
        console.log(this.addGroup.get("Number"));
        console.log(this.addGroup.get("City"));
        console.log(this.addGroup.get("Zipcode"));
        console.log(this.addGroup.get("Country"));
    }
}