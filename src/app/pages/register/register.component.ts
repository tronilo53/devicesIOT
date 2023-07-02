import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('info') info: ElementRef;
  public data: any = {
    name: '',
    email: '',
    password: ''
  };
  private regEmail: RegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  private regPassword: RegExp = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

  constructor( private renderer: Renderer2 ) {}

  public register(): void {
    if( this.data.name === '' || this.data.email === '' || this.data.password === '' ) this.alert('error', 'Upps!', 'Todos los campos son requeridos');
    else {
      if( !this.regEmail.test(this.data.email) ) this.alert('error', 'Upps!', 'Formato de email no válido');
      else if( !this.regPassword.test(this.data.password) ) this.alert('error', 'Upps!', 'Formato de contraseña Incorrecto');
      else console.log(this.data);
    }
  }
  public showInfo(): void {
    if( this.info.nativeElement.classList.contains('none') ) this.renderer.removeClass(this.info.nativeElement, 'none');
    else this.renderer.addClass(this.info.nativeElement, 'none');
  }
  private alert( icon: any, title: string, message: string ) {
    Swal.fire({
      icon: icon,
      title: title,
      text: message
    });
  }
}
