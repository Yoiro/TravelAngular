import { Component } from '@angular/core';
import { TravelService } from '../Service/travel.service';
import { Global } from '../shared/global';
import { ITravel } from '../Models/travel';

@Component({
    templateUrl: "./Templates/travels.component.html"
})
export class TravelsComponent{
    travels: ITravel[];

    constructor(private _travelService: TravelService) { }

    LoadTravels() {
        this._travelService.get(Global.BASE_TRAVEL_ENDPOINT).
            subscribe(travels => this.travels = travels);
    }

    subscribeToTravel(id: number) {
        console.log(this.travels[id].Places, "Subscribed!");
    }
}