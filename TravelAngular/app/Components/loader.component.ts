import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoaderService } from '../Service/loader.service';
import { LoaderState } from '../Models/loader';

@Component({
    selector: 'loader',
    templateUrl: './Templates/loader.component.html'
})
export class LoaderComponent implements OnInit {
    show = false;
    private subscription: Subscription;
    constructor(private loaderService: LoaderService) { }

    ngOnInit() {
        this.subscription = this.loaderService.loaderState.subscribe((state: LoaderState) =>
            this.show = state.show);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}