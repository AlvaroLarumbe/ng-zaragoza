import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {NgTableComponent, NgTableFilteringDirective, NgTableSortingDirective} from 'ng2-table/ng2-table';

import {AppComponent} from './app/app.component';
import {APP_ROUTER_PROVIDERS} from './app/app.routes';

// Import RxJS operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Disabled inspection due to a PHPStorm bug?
//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    GOOGLE_MAPS_PROVIDERS
]);
