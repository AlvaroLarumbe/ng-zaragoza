import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from '@angular/router';

import {BikeStationsComponent} from "../bike-stations/bike-stations.component";

@Component({
    selector: 'ng-zaragoza',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.component.css'
    ],
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@Routes([
    {
        path: '/estaciones-bici',
        component: BikeStationsComponent
    }
])
export class AppComponent {

}
