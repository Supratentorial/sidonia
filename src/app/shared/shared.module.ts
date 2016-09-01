import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientSearchTypeaheadComponent} from './patient-search-typeahead.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [PatientSearchTypeaheadComponent],
    imports: [CommonModule, FormsModule, NgbModule],
    exports: [PatientSearchTypeaheadComponent]
})

export class SharedModule {}
