import { Component, Input } from '@angular/core';

@Component({
    selector: 'bas-alert-danger',
    templateUrl: './alert.danger.component.html',
    styleUrls: ['alert.danger.component.css']
})
export class AlertDangerComponent { 
    @Input() description: string;
    @Input() visible: boolean = false;
}