import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/observable';
import Patient = fhir.Patient;
import Bundle = fhir.Bundle;

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
    return this.http.get(this.patientsUrl, {search: params}).map(this.processSearchResults).catch(this.handleError);
  }

  getPatientById(patientId: string): Observable<Patient> {
    let params = new URLSearchParams();
    params.set('_id', patientId);
    params.set('_pretty', 'true');
    return this.http.get(this.patientsUrl, {search: params}).map(this.processPatient).catch(this.handleError);
  }

  processPatient(res: Response) {
    let body : Bundle= res.json();
    if(body.total === 0){
      console.log('No patient found with that ID');
    }
    if(body.total > 1){
      console.log('More than one patient returned');
    }
    return body.entry[0].resource;
  }

  processSearchResults(res: Response) {
    let body : Bundle = res.json();
    if (body.total === 0) {
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
