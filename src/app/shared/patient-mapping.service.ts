import {Injectable} from "@angular/core";
import Patient = fhir.Patient;
import {PatientDTO} from "../patients/patientDTO";
import * as _ from "lodash";

@Injectable()
export class PatientMappingService {

  constructor(){

  }

  mapToPatientDTO(patient: Patient): PatientDTO {
    let patientDTO: PatientDTO = new PatientDTO();
    patientDTO.id = patient.id;
    patientDTO.familyName = _.map(patient.name[0].family, 'family').join(' ');
    patientDTO.givenName = _.map(patient.name[0].given, 'given').join(' ');
    patientDTO.birthDate = patient.birthDate;
    return patientDTO;
  }
}
