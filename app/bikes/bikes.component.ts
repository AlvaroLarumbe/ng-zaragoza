import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'bikes',
    moduleId: module.id,
    templateUrl: 'bikes.component.html',
    providers: [
        HTTP_PROVIDERS
    ]
})
export class BikesComponent {
    /**constructor(http: Http) {
        http.get('http://www.zaragoza.es/api/recurso/urbanismo-infraestructuras/estacion-bicicleta.json?rf=html&results_only=false&srsname=utm30n')
            .map(res => res.json())
            .subscribe(bikes => this.bikes = bikes);
    };*/

    bikes: Bike[];

    bikes = [
        {id: 1, title: 'Puesto 1'},
        {id: 2, title: 'Puesto 2'}
    ];
}

export class Bike {
    id: string;
    title: string;
}
