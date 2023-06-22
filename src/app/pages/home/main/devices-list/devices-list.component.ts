import { Component } from '@angular/core';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent {

  public testDevices: any[] = [
    { id: "1", alias: "Alto Jardin", serial: "GADTEST-0000001", installDate: "20-06-2023" },
    { id: "2", alias: "Roca Casterli", serial: "GADTEST-0000002", installDate: "19-06-2023" },
    { id: "3", alias: "Roca Dragon", serial: "GADTEST-0000003", installDate: "19-06-2023" },
    { id: "4", alias: "Himbernalia", serial: "GADTEST-0000004", installDate: "22-06-2023" },
    { id: "5", alias: "Desembarco del Rey", serial: "GADTEST-0000005", installDate: "21-06-2023" },
  ];
}
