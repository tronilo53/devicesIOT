import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  public avatar: string = 'default.png';
  private avatar$: BehaviorSubject<string> = new BehaviorSubject<string>(this.avatar);

  constructor() { }

  public getAvatar(): Observable<string> {
    return this.avatar$.asObservable();
  }
  public setAvatar(avatar: string): void {
    this.avatar$.next( avatar );
  }
}
