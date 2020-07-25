import { Component } from '@angular/core';
import { FileService } from './services/file.service';

@Component({
    selector: 'bas-sale',
    templateUrl: 'sale.component.html'
})
export class SaleComponent {
    productId: number = 0;
    productDescripton: string = '';
    productPrice: number = 0;

    constructor(private fileService: FileService) {}

    getProduct(id: number) {
        if (id == 50) {
            this.productId = id;
            this.productDescripton = 'Pizza de Mussarela';
            this.productPrice = 23.59;
        } else if (id = 100) {
            this.getFiles();
        }
        this.productId = id;
    }

    getFiles() : void {
        this.fileService.getFiles()
            .then((result) => {
                console.log('filipe');
                console.log(result);
            })
            .catch(err => console.error(err));
    }
}