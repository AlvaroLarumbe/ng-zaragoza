import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from '@angular/router';

import {BikesComponent} from "../bikes/bikes.component";

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
        path: '/bikes',
        component: BikesComponent
    }
])
export class AppComponent {

}
