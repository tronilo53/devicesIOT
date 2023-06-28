import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
    
  }
}
