import {Component, OnInit} from "@angular/core";
import {PatientManagerService} from "./patient-manager.service";
@Component({
  selector: 'patient-demographics',
  template: require('./patient-demographics.component.html')
})

export class PatientDemographicsComponent implements OnInit {
  givenName: string;
  familyName: string;

  constructor(private patientManagerService: PatientManagerService) {
  }


  ngOnInit(): void {
    this.givenName = this.patientManagerService.currentPatient.name[0].given[0];
    this.familyName = this.patientManagerService.currentPatient.name[0].family[0];
  }
}
