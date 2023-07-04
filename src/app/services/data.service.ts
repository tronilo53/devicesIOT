import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  creation: Date;
  status: string;
  role: string;
  avatar: string;
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private __httpClient: HttpClient ) { }

  public getDevices() {
    return this.__httpClient.get( '../../assets/json/devices.json' );
  }
  public setNewUser( data: any ) {
    return this.__httpClient.post( 'https://freelsdevcamp.es/devicesIOT/src/assets/backend/setNewUser.php', JSON.stringify(data) );
  }
}
