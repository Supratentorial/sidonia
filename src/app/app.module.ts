import {NgModule} from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import {DashboardModule} from './dashboard/dashboard.module.ts'
import {SettingsModule} from './settings/settings.module.ts'
import {AppoinmentsModule} from './appointments/appointments.module.ts'
import {SharedModule} from './shared/shared.module.ts'
import {AppComponent} from './app.component';
 
import {PatientService} from './shared/patient.service.ts';


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpModule, routing, DashboardModule, SettingsModule, AppoinmentsModule, SharedModule],
    bootstrap: [AppComponent],
    providers: [PatientService]
})

export class AppModule { }
