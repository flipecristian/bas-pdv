import { Component, Input } from '@angular/core';

@Component({
    selector: 'bas-product-description',
    templateUrl: './product-description.component.html'
})
export class ProductDescriptionComponent { 
    @Input() description: string = '';
}