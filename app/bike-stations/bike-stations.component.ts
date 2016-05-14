import {Component, OnInit} from '@angular/core';

import {BikeStation} from "./bike-station";
import {BikeStationService} from "./bike-station.service";

@Component({
    selector: 'bikes',
    moduleId: module.id,
    templateUrl: 'bike-stations.component.html',
    providers: [
        BikeStationService
    ]
})
export class BikeStationsComponent implements OnInit{
    bikeStations: BikeStation[];
    lastUpdated: string;

    constructor(private _bikeStationService: BikeStationService) {}

    ngOnInit() {
        this.getBikeStations();
    }

    private getBikeStations() {
        this._bikeStationService.getBikeStations().subscribe(
            bikeStations => {
                this.bikeStations = bikeStations;
                let date = new Date(bikeStations[0].lastUpdated);
                this.lastUpdated = date.getUTCHours() + ':' + date.getUTCMinutes();
            }
        );
    }
}
