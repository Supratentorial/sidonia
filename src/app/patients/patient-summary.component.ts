import {Component, OnInit} from "@angular/core";
import {PatientManagerService} from "./patient-manager.service";
import Patient = fhir.Patient;
import {Subscription} from "rxjs";

@Component({
    selector: 'patient-summary',
    template: require('./patient-summary.component.html')
  }
)
export class PatientSummaryComponent implements OnInit{

  currentPatient : Patient;
  currentPatientSubscription : Subscription;

  constructor(private patientManagerService: PatientManagerService) {
  }

  ngOnInit(): void{
    this.currentPatient = this.patientManagerService.currentPatient;
    this.currentPatientSubscription = this.patientManagerService.currentPatientEvent.subscribe((value) => {
      this.currentPatient = value;
    });
  }

}
