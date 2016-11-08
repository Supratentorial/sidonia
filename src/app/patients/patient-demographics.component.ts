import {Component, OnInit} from "@angular/core";
import {PatientManagerService} from "./patient-manager.service";
import Patient = fhir.Patient;
@Component({
  selector: 'patient-demographics',
  template: require('./patient-demographics.component.html')
})

export class PatientDemographicsComponent implements OnInit {

  patient: Patient;

  constructor(private patientManagerService: PatientManagerService) {

  }


  ngOnInit(): void {
    this.patient = this.patientManagerService.currentPatient;
  }
}
