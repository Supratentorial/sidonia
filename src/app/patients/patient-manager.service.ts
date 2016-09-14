import Patient = fhir.Patient;
import id = fhir.id;
import {Subject} from "rxjs";

export class PatientManagerService{

  openPatients: Patient[] = [];
  openPatientsEvent : Subject<Patient[]> = new Subject<Patient[]>();
  currentPatient : Patient;
  currentPatientEvent : Subject<Patient> = new Subject<Patient>();

  constructor(){

  }

  addPatientToOpenList(patient:Patient){
    if(!this.isPatientOpen(patient.id))
    this.openPatients.push(patient);
    this.openPatientsEvent.next(this.openPatients);
  }

  isPatientOpen(patientId: id): boolean {
    for (var i = 0; i < this.openPatients.length; i++) {
      if (patientId === this.openPatients[i].id) {
        return true;
      }
    }
    return false;
  }

  setCurrentPatient(patientId: id): void {
    if (patientId) {
      for (var i = 0; i < this.openPatients.length; i++) {
        if (patientId === this.openPatients[i].id) {
          this.currentPatient = this.openPatients[i];
          this.currentPatientEvent.next(this.currentPatient);
        }
      }
    }
  }

}
