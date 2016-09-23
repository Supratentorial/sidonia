import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppointmentsService} from "../appointments/appointments.service";
import Appointment = fhir.Appointment;

@Component({
  selector: 'schedule-list',
  template: require('./schedule-list.component.html')
})

export class ScheduleListComponent implements OnInit, OnDestroy {
  scheduleList : Appointment[] = [];

  constructor(private appointmentService: AppointmentsService) {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }


}
