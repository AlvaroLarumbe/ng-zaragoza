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

    public columns:Array<any> = [
        {title: 'Título', name: 'title'},
        {title: 'Bicis disponibles', name: 'bicisDisponibles'},
        {title: 'Anclajes disponibles', name: 'anclajesDisponibles'}
    ];

    public rows:Array<any> = [];
    public length:number = 0;

    public config:any = {
        paging: false,
        sorting: {columns: this.columns}
    };

    public constructor(private _bikeStationService: BikeStationService) {}

    ngOnInit() {
        this.getBikeStations();
        this.onChangeTable(this.config);
    }

    private getBikeStations() {
        this._bikeStationService.getBikeStations().subscribe(
            bikeStations => {
                this.bikeStations = bikeStations;
                this.length = bikeStations.length;
                let date = new Date(bikeStations[0].lastUpdated);
                this.lastUpdated = date.getUTCDay() + '/' + date.getUTCMonth() + '/' + date.getUTCFullYear() + ' ' + date.getUTCHours() + ':' + date.getUTCMinutes();
                
                return new Promise((resolve, reject) => {
                    resolve(true);
                });
            }
        );
    }

    public changeSort(data:any, config:any):any {
        if (!config.sorting) {
            return data;
        }

        let columns = this.config.sorting.columns || [];
        let columnName:string = void 0;
        let sort:string = void 0;

        for (let i = 0; i < columns.length; i++) {
            if(columns[i].hasOwnProperty('sort')) {
                if (columns[i].sort !== '') {
                    columnName = columns[i].name;
                    sort = columns[i].sort;
                }
            }
        }

        if (!columnName) {
            return data;
        }

        // simple sorting
        return data.sort((previous:any, current:any) => {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            } else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }

            return 0;
        });
    }

    public changeFilter(data:any, config:any):any {
        if (!config.filtering) {
            return data;
        }

        let filteredData:Array<any> = data.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));

        return filteredData;
    }

    public onChangeTable(config:any) {
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }

        let filteredData = this.changeFilter(this.bikeStations, this.config);
        this.rows = this.changeSort(filteredData, this.config);
        //this.length = this.rows.length;
    }
}
