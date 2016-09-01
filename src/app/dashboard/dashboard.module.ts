import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleListComponent} from './schedule-list.component';
import {DashboardShellComponent} from './dashboard-shell.component';

@NgModule({
    declarations: [DashboardShellComponent, ScheduleListComponent],
    imports: [CommonModule],
    exports: [DashboardShellComponent]

})
export class DashboardModule {}
