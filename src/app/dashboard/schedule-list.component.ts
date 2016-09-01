import {Component} from '@angular/core';

@Component({
    selector: 'schedule-list',
    template: require('./schedule-list.component.html')
})

export class ScheduleListComponent {
    scheduleList = [
        { givenName: 'Blake', familyName: 'Mumford' , middleName: 'Phillip'},
        { givenName: 'Edward', familyName: 'Mumford', middleName: 'Louis' },
        { givenName: 'Helena', familyName: 'Mumford', middleName: 'Maria'}
        ];
}
