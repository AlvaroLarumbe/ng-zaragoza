import {provideRouter, RouterConfig} from '@angular/router';

import {AppComponent} from "./app.component";
import {BikeStationsComponent} from '../bike-stations/bike-stations.component';

const routes: RouterConfig = <RouterConfig>[
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'estaciones-bici',
        component: BikeStationsComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
