import { Injectable } from '@angular/core'
import { IpcRenderer } from 'electron'

@Injectable({
  providedIn: 'root',
})
export class UserService {
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
   * @param login 
   * @param password 
   */
  login(login: string, password: string) : any {
    let payload = {type: 'operation_login', content: {login: login, password: password}};
    return this.ipc.sendSync('message', payload);
  }
}