import {Routes, RouterModule} from "@angular/router";
import {PatientShellComponent} from "./patient-shell.component";
import {PatientHomeComponent} from "./patient-home.component";
import {ModuleWithProviders} from "@angular/core";
import {PatientSummaryComponent} from "./patient-summary.component";
import {PatientDemographicsComponent} from "./patient-demographics.component";

const patientRoutes: Routes = [
  {
    path: 'patients',
    component: PatientShellComponent
  },
  {
    path: 'patients/:id',
    component: PatientShellComponent,
    children: [
      {path: '', component: PatientSummaryComponent},
      {path: 'edit-basic', component: PatientDemographicsComponent}
    ]
  }
];

export const patientRouting: ModuleWithProviders = RouterModule.forChild(patientRoutes);
