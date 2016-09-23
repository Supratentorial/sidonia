import {Injectable} from "@angular/core";
import {AppointmentsService} from "../appointments/appointments.service";
import {PatientService} from "../shared/patient.service";
import {ScheduleItem} from "./schedule-item";
import Patient = fhir.Patient;
import Appointment = fhir.Appointment;
import Practitioner = fhir.Practitioner;

@Injectable()
export class ScheduleListService {

  private constructor(private appointmentService: AppointmentsService, private patientService: PatientService) {

  }

  getScheduleItems(date: string) {
    let scheduleList: Array<ScheduleItem> = [];
    let patientList: Array<Patient> = [];
    this.appointmentService.getAppointmentsByDate(date).subscribe(
      (appointments: Array<Appointment>) => {
        let scheduleItem :ScheduleItem;
        let patient : Patient;
        let practitioner : Practitioner;
        for (let i = 0; i <= appointments.length; i++) {
          let participants = appointments[i].participant;
          for(let i = 0; i< participants.length; i++){
            if (participants[i].actor.reference){
              this.
            }
          }
        }
      });
  }

}

