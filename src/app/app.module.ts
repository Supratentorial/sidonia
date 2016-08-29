import {NgModule} from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {DashboardShellComponent} from './dashboard/dashboard-shell.component';
import {SettingsShellComponent} from './settings/settings-shell.component';
import {AppointmentsShellComponent} from './appointments/appointments-shell.component';

@NgModule({
    declarations: [AppComponent, DashboardShellComponent, SettingsShellComponent, AppointmentsShellComponent],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})

export class AppModule { }
