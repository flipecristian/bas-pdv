import { Injectable } from '@angular/core'
import { IpcRenderer } from 'electron'
import { Product } from './product'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private ipc: IpcRenderer

  constructor() {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer
      } catch (error) {
        throw error
      }
    } else {
      console.warn('Could not load electron ipc')
    }
  }

  /**
   * @param id 
   */
  getProduct(id: number) : Product | null {
    let payload = {type: 'get_product', content: { id: id}};
    return this.ipc.sendSync('message', payload);
  }

  /**
   * @param cupon 
   */
  finalizeSale(cupon: object) : boolean {
    let payload = {type: 'finalize_sale', content: cupon};
    return this.ipc.sendSync('message', payload);
  }

}