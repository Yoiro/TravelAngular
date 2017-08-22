import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ITravel } from '../Models/travel';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TravelService {

    constructor(private _http: Http) {
    }

    get(url: string): Observable<any> {
        return this._http.get(url)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    post(url: string, model: ITravel): Observable<ITravel> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    put(url: string, id: number, model: ITravel): Observable<ITravel> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url + id, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    delete(url: string, id: number): Observable<ITravel> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url + id, options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}