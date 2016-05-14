import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import {BikeStation} from "./bike-station";

@Injectable()
export class BikeStationService {
    constructor(private http: Http) {}

    private bikeStationsUrl = 'http://www.zaragoza.es/api/recurso/urbanismo-infraestructuras/estacion-bicicleta.json?rf=html&results_only=false&srsname=utm30n';

    getBikeStations(): Observable<BikeStation[]> {
        return this.http.get(this.bikeStationsUrl)
                        .map(this.extractBikeStations)
                        .catch(this.handleError);
    }

    private extractBikeStations(res: Response) {
        if(res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }

        let json = res.json().result;

        // Return bike stations sorted by ID
        return json.sort(function(a, b) {
                let ka = Number(a.id),
                    kb = Number(b.id);

                if(ka < kb) {
                    return -1;
                }
                if(ka > kb) {
                    return 1;
                }

                return 0;
            }) || {};
    }

    private handleError(error: any) {
        console.error(error.message);
        return Observable.throw(error.message);
    }
}
