import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/observable';

import Bundle = fhir.Bundle;
import {PatientDTO} from "../patients/patientDTO";
import Patient = fhir.Patient;
import {PatientMappingService} from "./patient-mapping.service";

@Injectable()
export class PatientService {

  private patientsUrl = 'http://fhirtest.uhn.ca/baseDstu2/Patient';

  constructor(private http: Http, private patientMappingService : PatientMappingService) {

  }

  searchPatients(searchTerm: string): Observable<PatientDTO[]> {
    let params = new URLSearchParams();
    params.set('name', searchTerm);
    params.set('_count', '10');
    params.set('_pretty', 'true');
    return this.http.get(this.patientsUrl, {search: params}).map(this.processSearchResults).catch(this.handleError);
  }

  getPatientById(patientId: string): Observable<PatientDTO> {
    let params = new URLSearchParams();
    params.set('_id', patientId);
    params.set('_pretty', 'true');
    return this.http.get(this.patientsUrl, {search: params}).map(this.processPatient).catch(this.handleError);
  }

  processPatient(res: Response) {
    let body: Bundle = res.json();
    let patientDTO: PatientDTO;
    if (body.total === 0) {
      console.log('No patientDTO found with that ID');
    }
    if (body.total > 1) {
      console.log('More than one patientDTO returned');
    }
    console.log(body.entry[0].resource);
    //patientDTO = this.patientMappingService.mapToPatientDTO(body.entry[0].resource);
    return patientDTO;
  }

  processSearchResults(res: Response) {
    let body: any = res.json();
    if (body.total === 0) {
      return [];
    }
    let results: Array<PatientDTO> = [];
    for (let i = 0; i < body.entry.length; i++) {
      let patient : Patient;
      if(body.entry[i].resource){
        patient = body.entry[i].resource;
      }

      results.push(this.patientMappingService.mapToPatientDTO(patient));
    }

    return results;
  }

  handleError(error: any) {
    let errorMsg = error.message;
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }
}
