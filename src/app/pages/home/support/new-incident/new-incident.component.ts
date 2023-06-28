import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  public ticket:number = this.random( 100000, 9999999 );
  public inc: any = {
    issue: '',
    message: ''
  };

  constructor() {}

  ngOnInit(): void {
    
  }
  private random( min:number, max:number ): number {
    return Math.round( Math.random() * ( max - min ) + min );
  }
}
