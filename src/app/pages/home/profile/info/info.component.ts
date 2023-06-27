import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements AfterViewInit {

  public avatar: string = '';

  constructor() {}

  ngAfterViewInit(): void {
    if( localStorage.getItem('avatar') ) this.avatar = localStorage.getItem('avatar');
    else this.avatar = 'default.png';
  }
}
