import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Patient} from './patient';
import {Observable} from 'rxjs/observable';

@Injectable()
export class PatientService {

    private patientsUrl = 'http://fhirtest.uhn.ca/baseDstu2/Patient';

    constructor(private http: Http) {

    }

    searchPatients(searchTerm: string): Observable<Patient[]> {
        let params = new URLSearchParams();
        params.set('_count', '10');
        params.set('_search', searchTerm);
        params.set('_pretty', 'true');
        console.log(params.toString());
        return this.http.get(this.patientsUrl).map(this.extractData).catch(this.handleError);
    }

    extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    handleError(error: any) {
        let errorMsg = error.message;
        console.error(errorMsg);
        return Observable.throw(errorMsg);
    }
}
