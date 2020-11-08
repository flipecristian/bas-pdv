import { Component, Input } from '@angular/core';

@Component({
    selector: 'bas-input',
    templateUrl: './input.component.html'
})
export class InputComponent { 
    @Input() id: string;
    @Input() type: string;
    @Input() label: string;
    @Input() disabled: boolean = false;
    @Input() value: string = '';
}