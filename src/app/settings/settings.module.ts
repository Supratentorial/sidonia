import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsShellComponent} from './settings-shell.component';


@NgModule({
    declarations: [SettingsShellComponent],
    imports: [CommonModule],
    exports: [SettingsShellComponent]

})
export class SettingsModule {}
