import {NgModule} from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import {DashboardModule} from './dashboard/dashboard.module.ts';
import {SettingsModule} from './settings/settings.module.ts';
import {AppointmentsModule} from './appointments/appointments.module.ts';
import {SharedModule} from './shared/shared.module.ts';
import {PatientModule} from './patients/patient.module';
import {AppComponent} from './app.component';

import {PatientService} from './shared/patient.service.ts';
import {PatientManagerService} from "./patients/patient-manager.service";
import {AppointmentsService} from "./appointments/appointments.service";
import {PatientMappingService} from "./shared/patient-mapping.service";


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpModule, routing, DashboardModule, SettingsModule, AppointmentsModule, SharedModule, PatientModule],
    bootstrap: [AppComponent],
    providers: [PatientManagerService, PatientService, AppointmentsService, PatientMappingService]
})

export class AppModule { }
