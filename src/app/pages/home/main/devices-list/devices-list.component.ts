import { Component, OnInit } from '@angular/core';
import { Devices } from 'src/app/interfaces/devices';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {
  
  public devices: Devices[] = [];

  constructor( private __dataService: DataService ) {}

  ngOnInit() {

    this.__dataService.getDevices().subscribe( (e: any) => {
      this.devices = e;
    });
  }
}
