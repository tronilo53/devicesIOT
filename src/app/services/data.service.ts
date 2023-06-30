import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  creation: Date;
  status: string;
  role: string;
  avatar: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private __httpClient: HttpClient ) { }

  public getDevices() {
    return this.__httpClient.get( '../../assets/json/devices.json' );
  }
  public getUser( data: any ) {
    return this.__httpClient.post<User>( 'http://localhost/backend/getUser.php', JSON.stringify(data) );
  }
}
