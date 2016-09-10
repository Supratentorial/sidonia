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
    params.set('name', searchTerm);
    params.set('_count', '10');
    params.set('_pretty', 'true');
    return this.http.get(this.patientsUrl, {search: params}).map(this.extractData).catch(this.handleError);
  }

  extractData(res: Response) {
    let body = res.json();
    if(body.total == 0){
      return [];
    }
    return body.entry || {};
  }

  handleError(error: any) {
    let errorMsg = error.message;
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }
}
