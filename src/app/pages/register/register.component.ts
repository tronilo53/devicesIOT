import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('info') info: ElementRef;
  @ViewChild('len') len: ElementRef;
  @ViewChild('digit') digit: ElementRef;
  @ViewChild('upper') upper: ElementRef;
  @ViewChild('lower') lower: ElementRef;
  @ViewChild('symbol') symbol: ElementRef;
  public data: any = {
    name: '',
    email: '',
    password: ''
  };
  private letters: string[] = [];
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
  public checkLetters(event: any): void {
    this.letters.push(event.key);
    this.checkLetter();
    console.log(this.letters);
    
  }
  private alert( icon: any, title: string, message: string ) {
    Swal.fire({
      icon: icon,
      title: title,
      text: message
    });
  }
  private checkLetter(): void {
    if( this.letters.indexOf('CapsLock') > -1 ) this.deleteLetter('CapsLock');
    if( this.letters.indexOf('Backspace') > -1 ) this.deleteLetter('Backspace');
    if( this.letters.indexOf('ArrowLeft') > -1 ) this.deleteLetter('ArrowLeft');
    if( this.letters.indexOf('ArrowUp') > -1 ) this.deleteLetter('ArrowUp');
    if( this.letters.indexOf('ArrowRight') > -1 ) this.deleteLetter('ArrowRight');
    if( this.letters.indexOf('ArrowDown') > -1 ) this.deleteLetter('ArrowDown');
    if( this.letters.indexOf('Shift') > -1 ) this.deleteLetter('Shift');
    if( this.letters.indexOf('Control') > -1 ) this.deleteLetter('Control');
    if( this.letters.indexOf('Meta') > -1 ) this.deleteLetter('Meta');
    if( this.letters.indexOf('Alt') > -1 ) this.deleteLetter('Alt');
    if( this.letters.indexOf('AltGraph') > -1 ) this.deleteLetter('AltGraph');
    if( this.letters.indexOf('Delete') > -1 ) this.deleteLetter('Delete');
    if( this.letters.indexOf('End') > -1 ) this.deleteLetter('End');
    if( this.letters.indexOf('Insert') > -1 ) this.deleteLetter('Insert');
    if( this.letters.indexOf('Home') > -1 ) this.deleteLetter('Home');
    if( this.letters.indexOf('ScollLock') > -1 ) this.deleteLetter('ScollLock');
    if( this.letters.indexOf('Pause') > -1 ) this.deleteLetter('Pause');
    if( this.letters.indexOf('F1') > -1 ) this.deleteLetter('F1');
    if( this.letters.indexOf('F2') > -1 ) this.deleteLetter('F2');
    if( this.letters.indexOf('F3') > -1 ) this.deleteLetter('F3');
    if( this.letters.indexOf('F4') > -1 ) this.deleteLetter('F4');
    if( this.letters.indexOf('F6') > -1 ) this.deleteLetter('F6');
    if( this.letters.indexOf('F7') > -1 ) this.deleteLetter('F7');
    if( this.letters.indexOf('F8') > -1 ) this.deleteLetter('F8');
    if( this.letters.indexOf('F9') > -1 ) this.deleteLetter('F9');
    if( this.letters.indexOf('F10') > -1 ) this.deleteLetter('F10');
    if( this.letters.indexOf('F11') > -1 ) this.deleteLetter('F11');
    if( this.letters.indexOf('F12') > -1 ) this.deleteLetter('F12');
    if( this.letters.indexOf('Enter') > -1 ) this.deleteLetter('Enter');
    if( this.letters.indexOf('Escape') > -1 ) this.deleteLetter('Escape');
    if( this.letters.indexOf('Tab') > -1 ) this.deleteLetter('Tab');

    if( this.letters.length >= 8 && this.letters.length <= 16 ) this.renderer.addClass(this.len.nativeElement, 'success');
    else this.renderer.removeClass(this.len.nativeElement, 'success');
    let bandera = false;
    this.letters.some(e => { //TODO: CHECKEAR ESTA FUNCION, AL DEJAR APRETADO "BORRAR" SE SIGUE MANTENIENDO ESTADO DE CLASE
      if( e === '0' || e === '1' || e === '2' || e === '3' || e === '4' || e === '5' || e === '6' || e === '7' || e === '8' || e === '9' ) {
        bandera = true;
        console.log('Hay un digito');
        this.renderer.addClass(this.digit.nativeElement, 'success');
      }else {
        bandera = false;
        console.log('No hay digito');
        this.renderer.removeClass(this.digit.nativeElement, 'success');
      }
      return bandera;
    });
  }
  private deleteLetter( letter: string ): void {
    const pos = this.letters.indexOf(letter);
    this.letters.splice(pos, 1);
    if( letter === 'Backspace' ) this.letters.pop();
  }
}
