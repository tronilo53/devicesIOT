import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-device',
  templateUrl: './detail-device.component.html',
  styleUrls: ['./detail-device.component.css']
})
export class DetailDeviceComponent implements OnInit {

  public id: string = '';

  constructor( private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p: Params) => this.id = p['id']);
  }
}
