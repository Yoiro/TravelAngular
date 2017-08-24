import { Component, OnInit, ViewChild } from '@angular/core';
import { TravelService } from '../Service/travel.service';
import { UserService } from '../Service/user.service';
import { AddressService } from '../Service/address.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ITravel } from '../Models/travel';
import { IUser } from '../Models/user';
import { IAddress } from '../Models/address';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';

@Component({
    templateUrl: './Templates/travels.management.component.html',
    providers: [UserService, AddressService]
})
export class TravelsMComponent implements OnInit {

    @ViewChild('modal') modal: ModalComponent;
    travels: ITravel[];
    travel: ITravel;
    users: IUser[];
    addresses: IAddress[];
    msg: string;
    indLoading: boolean = false;
    travelFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(
        private fb: FormBuilder,
        private _userService: UserService,
        private _addressService: AddressService,
        private _travelService: TravelService) { }

    LoadUsers(): void {
        this.indLoading = true;
        this._userService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(users => { this.users = users; },
            error => { this.msg = <any>error; },
            () => { this.LoadAddresses(); }
            );
    }

    LoadAddresses(): void {
        this._addressService.get(Global.BASE_ADDRESS_ENDPOINT)
            .subscribe(addresses => { this.addresses = addresses; },
            error => this.msg = <any>error,
            () => { this.LoadTravels(); });
    }

    LoadTravels(): void {
        this._travelService.get(Global.BASE_TRAVEL_ENDPOINT)
            .subscribe(travels => { this.travels = travels; },
            error => this.msg = <any>error);
    }

    ngOnInit(): void {
        this.travelFrm = this.fb.group({
            Id: [''],
            DriverName: ['', Validators.required],
            OriginID: ['', Validators.required],
            DestinationID: ['', Validators.required],
            Departure: ['', Validators.required]
        });
        this.LoadUsers();
    }
}
