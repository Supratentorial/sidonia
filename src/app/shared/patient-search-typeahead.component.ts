import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {PatientService} from './patient.service';

@Component({
  selector: 'patient-search-typeahead',
  template: require('./patient-search-typeahead.component.html'),
  styles: [`.form-control { width: 300px; }`]
})
export class PatientSearchTypeaheadComponent {

  selectedPatient: any;
  searching: boolean;

  constructor(private patientService: PatientService) {

  }

  onSelect = (selectedPatient) => {
    console.log(selectedPatient);
  };

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .do(term => {
        this.searching = term.length > 0;
      })
      .switchMap(term => term === '' ? Observable.of([]) : this.patientService.searchPatients(term))
      .do(() => {
        this.searching = false;
      })
}
