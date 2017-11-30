import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { PiResponse } from './pi-response.model';
import { PiAssetServer } from './pi-assert-server.model';
import { PiAssetDatabase } from './pi-asset-database.model';
import { PiElement } from './pi-element.model';

import { environment } from '../../../environments/environment';

@Injectable()
export class PiApiService {

    base_url = "https://pi.dvnhackathon.com/piwebapi"

    constructor(
        private httpClient: HttpClient
    ) {}

    getAssetServers() : Observable<PiAssetServer[]> {
        return this.httpClient
            .get(this.base_url+"/assetservers", { headers: this.getHeaders() })
            .map(response => response as PiResponse<PiAssetServer>)
            .map(piResponse => {
                console.debug("piResponse", piResponse);
                return piResponse.Items
            });
    }

    getAssetDatabases(webId: string) : Observable<PiAssetDatabase[]> {
        return this.httpClient
            .get(this.base_url + "/assetservers/" + webId + "/assetdatabases", { headers: this.getHeaders() })
            .map(response => response as PiResponse<PiAssetDatabase>)
            .map(piResponse => piResponse.Items);
    }

    getAssetElements(webId: string) : Observable<PiElement[]> {
        return this.httpClient
            .get(this.base_url + "/assetdatabases/" + webId + "/elements", { headers: this.getHeaders() })
            .map(response => response as PiResponse<PiElement>)
            .map(piResponse => piResponse.Items);
    }

    getElements(webId: string) : Observable<PiElement[]> {
        return this.httpClient
            .get(this.base_url + "/elements/" + webId + "/elements", { headers: this.getHeaders() })
            .map(response => response as PiResponse<PiElement>)
            .map(piResponse => piResponse.Items);
    }

    getPlot(webId: string) : Observable<PiElement[]> {
        return this.httpClient
            .get(this.base_url + "/streamsets/" + webId + "/plot"+this.getTimeRange(), { headers: this.getHeaders() })
            .map(response => response as PiResponse<PiElement>)
            .map(piResponse => piResponse.Items);
    }

    private getHeaders() : HttpHeaders {
        let headers = new HttpHeaders();
        let username = environment.username;
        let password = environment.password;
        headers = headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
        headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
        return headers;
    }

    private getTimeRange() : string {
        return "?startTime=10/18&endTime=11/8";
    }

}