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
import { PipesModule } from '../pipes/pipes.module';
import { AvatarComponent } from './home/profile/avatar/avatar.component';
import { InfoComponent } from './home/profile/info/info.component';
import { NewIncidentComponent } from './home/support/new-incident/new-incident.component';
import { MyIncidentsComponent } from './home/support/my-incidents/my-incidents.component';
import { DetailIncidentComponent } from './home/support/detail-incident/detail-incident.component';
import { FormsModule } from '@angular/forms';



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
    NewDeviceComponent,
    AvatarComponent,
    InfoComponent,
    NewIncidentComponent,
    MyIncidentsComponent,
    DetailIncidentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    NgCircleProgressModule.forRoot(),
    PipesModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
