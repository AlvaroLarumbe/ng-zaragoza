import {Component} from '@angular/core';

import {BikeStationService} from "./../bike-station.service";

@Component({
    selector: 'bikes',
    moduleId: module.id,
    templateUrl: 'bike-stations.component.html',
    providers: [
        BikeStationService
    ]
})
export class BikeStationsMapComponent {
    
}
