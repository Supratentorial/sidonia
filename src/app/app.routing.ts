/// <reference path="../../typings/index.d.ts"/>

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardShellComponent} from './dashboard/dashboard-shell.component';
import {SettingsShellComponent} from './settings/settings-shell.component';
import {AppointmentsShellComponent} from './appointments/appointments-shell.component';
import {PatientDetailShellComponent} from './patients/patient-detail-shell.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardShellComponent },
    { path: 'settings', component: SettingsShellComponent },
    { path: 'appointments', component: AppointmentsShellComponent },
    { path: 'patients/:id', component: PatientDetailShellComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
