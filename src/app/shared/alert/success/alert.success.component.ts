import { Component, Input } from '@angular/core';

@Component({
    selector: 'bas-alert-success',
    templateUrl: './alert.success.component.html',
    styleUrls: ['alert.success.component.css']
})
export class AlertSuccessComponent {
    @Input() description: string;
    @Input() visible: boolean = false;
}