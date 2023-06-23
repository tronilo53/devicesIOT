import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive } from "ng-apexcharts";
import { DataService } from 'src/app/services/data.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-detail-device',
  templateUrl: './detail-device.component.html',
  styleUrls: ['./detail-device.component.css']
})
export class DetailDeviceComponent implements OnInit {

  public id: string = '';
  public chartOptions: ChartOptions;
  private dataDevice: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private __dataService: DataService 
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p: Params) => {
      this.id = p['id'];
      this.__dataService.getDevices().subscribe((e: any) => {
        this.dataDevice = e;
      });
    });
  }
}
