import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  public avatars: string[] = [ 
    'Batman-256.png', 
    'Capitan-America-256.png', 
    'Daredevil-256.png', 
    'Green-Lantern-256.png', 
    'Invisible-Woman-256.png', 
    'Mister-Fantastic-256.png', 
    'Namor-256.png', 
    'Silver-Surfer-256.png', 
    'Superman-256.png', 
    'the-Thing-256.png' ];

  constructor() {}

  ngOnInit(): void {
    
  }

  public changeAvatar( avatar: string ) {
    Swal.fire({
      html:`
        <div class="container">
          <div class="row align-items-center text-center">
            <div class="col-5">
              <div style="padding: 5px; background-color: #494949; display: inline-block; border-radius: 10px;">
                <img src="../../../../../assets/avatars/${avatar}" style="width: 7rem;"/>
              </div>
            </div>
            <div class="col-2">
              <span class="material-symbols-outlined" style="font-size: 3rem; vertical-align: middle;">arrow_forward_ios</span>
            </div>
            <div class="col-5">
              <div style="padding: 5px; background-color: #494949; display: inline-block; border-radius: 10px;">
                <img src="../../../../../assets/avatars/${avatar}" style="width: 7rem;"/>
              </div>
            </div>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
