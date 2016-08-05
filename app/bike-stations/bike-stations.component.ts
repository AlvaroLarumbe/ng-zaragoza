import {Component, OnInit} from '@angular/core';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

import {BikeStation} from "./bike-station";
import {BikeStationService} from "./bike-station.service";

@Component({
    selector: 'bikes',
    moduleId: module.id,
    templateUrl: 'bike-stations.component.html',
    styleUrls: [
        'bike-stations.component.css'
    ],
    providers: [
        BikeStationService
    ],
    directives: [
        GOOGLE_MAPS_DIRECTIVES
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
                this.lastUpdated = date.getUTCDay() + '/' + date.getUTCMonth() + '/' + date.getUTCFullYear() + ' ' + date.getUTCHours() + ':' + date.getUTCMinutes();
            }
        );
    }
}
