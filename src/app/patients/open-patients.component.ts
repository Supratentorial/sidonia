import {Component, OnInit, OnDestroy} from "@angular/core";
import {PatientManagerService} from "./patient-manager.service";
import Patient = fhir.Patient;
import {Subscription} from "rxjs";
@Component({
  selector: 'open-patients',
  template: require('./open-patients.component.html')
})
export class OpenPatientsComponent implements OnInit, OnDestroy {

  openPatients: Array<Patient> = [];
  openPatientsSubscription : Subscription;

  constructor(private patientManagerService: PatientManagerService) {

  }

  ngOnInit(): void {
    this.openPatients = this.patientManagerService.openPatients;
    this.openPatientsSubscription = this.patientManagerService.openPatientsEvent.subscribe((value) => {
      this.openPatients = value;
    });
  }

  closePatient(): void{
    console.log('Close button has been clicked');
  }

  ngOnDestroy(): void {
  }
}
