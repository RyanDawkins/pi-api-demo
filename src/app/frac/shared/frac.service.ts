import { Injectable } from '@angular/core';
import { PiApiService } from '../../shared/pi/pi-api.service';
import { PiElement } from '../../shared/pi/pi-element.model';
import { PiAssetDatabase } from '../../shared/pi/pi-asset-database.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergemap';

@Injectable()
export class FracService {

    constructor(
        private piApiService : PiApiService
    ) {}

    getFracData() : Observable<PiElement[]> {
        return this.piApiService
            .getAssetServers()
            .flatMap(assetServers => {
                console.log("assetServers", assetServers);
                let assetServer = assetServers[0];
                return this.piApiService.getAssetDatabases(assetServer.WebId);
            })
            .flatMap(assetDatabases => {
                console.log("assetDatabases", assetDatabases);
                let assetDatabase = assetDatabases.find(a => a.Name == "Devon");
                return this.piApiService.getAssetElements(assetDatabase.WebId);
            })
            .flatMap(elements => {
                console.log("assetElements", elements);
                let element = elements[0];
                return this.piApiService.getElements(element.WebId);
            })
            .flatMap(elements => {
                console.log("elements", elements);
                let element = elements[0];
                return this.piApiService.getPlot(element.WebId)
            });
    }

}