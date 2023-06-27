import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit, AfterViewInit {

  public usersTest: any[] = [
    { username: 'tronilo53', name: 'Luis', email: 'tronilo53@gmail.com', creation: '27/06/23', status: 'enabled', rol: 'admin', avatar: 'Daredevil-256.png' },
    { username: 'tironlan', name: 'Tirion', email: 'tirionlan@gmail.com', creation: '26/06/23', status: 'enabled', rol: 'user', avatar: 'Namor-256.png' },
    { username: 'kalesi', name: 'Daneris', email: 'kalesidragons@gmail.com', creation: '20/06/23', status: 'enabled', rol: 'admin', avatar: 'Invisible-Woman-256.png' }
  ];
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
  @ViewChildren('avatarsImage') avatarImages: QueryList<ElementRef>;

  constructor( private renderer: Renderer2 ) {}

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    for( let i = 0; i < this.avatarImages.toArray().length; i++ ) {
      if( this.avatarImages.toArray()[i].nativeElement.childNodes[0].alt === localStorage.getItem( 'avatar' ) ) {
        this.renderer.addClass( this.avatarImages.toArray()[i].nativeElement, 'disabled' );
      }
    }
  }

  public changeAvatar( avatar: string ) {
    if( avatar !== localStorage.getItem( 'avatar' ) ) {
      Swal.fire({
        html:`
          <div class="container">
            <div class="row align-items-center text-center">
              <div class="col-5">
                <div style="padding: 5px; background-color: #494949; display: inline-block; border-radius: 10px;">
                  <img src="../../../../../assets/avatars/${localStorage.getItem('avatar')}" style="width: 7rem;"/>
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
        cancelButtonText: 'Ahora no',
        confirmButtonText: 'Adelante!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem( 'avatar', avatar );
          history.back();
        }
      })
    }
  }
}
