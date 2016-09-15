import {Routes, RouterModule} from "@angular/router";
import {PatientShellComponent} from "./patient-shell.component";
import {PatientHomeComponent} from "./patient-home.component";
import {ModuleWithProviders} from "@angular/core";
import {PatientDetailShellComponent} from "./patient-detail-shell.component";

const patientRoutes: Routes = [
  {
    path: 'patients',
    component: PatientShellComponent
  },
  {
    path: 'patients/:id',
    component: PatientShellComponent
  }
];

export const patientRouting: ModuleWithProviders = RouterModule.forChild(patientRoutes);
