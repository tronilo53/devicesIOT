import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { MainComponent } from './home/main/main.component';
import { ProfileComponent } from './home/profile/profile.component';
import { SupportComponent } from './home/support/support.component';
import { DetailDeviceComponent } from './home/main/detail-device/detail-device.component';
import { DevicesListComponent } from './home/main/devices-list/devices-list.component';
import { NewDeviceComponent } from './home/main/new-device/new-device.component';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ProfileComponent,
    SupportComponent,
    DetailDeviceComponent,
    DevicesListComponent,
    NewDeviceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    NgCircleProgressModule.forRoot()
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
