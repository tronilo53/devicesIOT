import { Component, OnInit } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public usersTest: any[] = [
    { username: 'tronilo53', name: 'Luis', email: 'tronilo53@gmail.com', creation: '27/06/23', status: 'enabled', rol: 'admin', avatar: 'Daredevil-256.png' },
    { username: 'tironlan', name: 'Tirion', email: 'tirionlan@gmail.com', creation: '26/06/23', status: 'enabled', rol: 'user', avatar: 'Namor-256.png' },
    { username: 'kalesi', name: 'Daneris', email: 'kalesidragons@gmail.com', creation: '20/06/23', status: 'enabled', rol: 'admin', avatar: 'Invisible-Woman-256.png' }
  ];
  public avatar: string = '';

  constructor( private __comunicationService: ComunicationService ) {}

  ngOnInit(): void {
    this.__comunicationService.getAvatar().subscribe(e => this.avatar = e);
  }
}
