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
}