import { Injectable } from '@angular/core'
import { IpcRenderer } from 'electron'

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

  getProduct(id: number) : void {
    this.ipc.send('message', id);
  }

}