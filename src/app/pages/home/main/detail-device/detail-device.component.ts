import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-device',
  templateUrl: './detail-device.component.html',
  styleUrls: ['./detail-device.component.css']
})
export class DetailDeviceComponent implements OnInit {

  public id: string = '';
  public dataDevice: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    public __dataService: DataService 
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p: Params) => {
      this.id = p['id'];
      this.__dataService.getDevices().subscribe((e: any) => {
        for( let i = 0; i < e.length; i++ ) {
          if( e[i].id === this.id ) this.dataDevice = e[i];
        }
      });
    });
  }
}
