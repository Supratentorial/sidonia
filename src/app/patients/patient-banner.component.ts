import {Component, OnInit, OnDestroy} from '@angular/core';
import {PatientManagerService} from "./patient-manager.service";
import Patient = fhir.Patient;
import {Subscription} from "rxjs";

@Component({
  selector: 'patient-banner',
  template: require('./patient-banner.component.html')
})
export class PatientBannerComponent implements OnInit, OnDestroy {

  currentPatient: Patient;
  currentPatientSubscription: Subscription;

  constructor(private patientManagerService: PatientManagerService) {

  }

  ngOnInit(): void {
    this.currentPatient = this.patientManagerService.currentPatient;
    this.currentPatientSubscription = this.patientManagerService.currentPatientEvent.subscribe((value) => {
      this.currentPatient = value;
    });
  }

  ngOnDestroy(): void {
    this.currentPatientSubscription.unsubscribe();
  }

}
