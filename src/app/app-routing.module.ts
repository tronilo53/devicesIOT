import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/home/main/main.component';
import { ProfileComponent } from './pages/home/profile/profile.component';
import { SupportComponent } from './pages/home/support/support.component';
import { DetailDeviceComponent } from './pages/home/main/detail-device/detail-device.component';
import { DevicesListComponent } from './pages/home/main/devices-list/devices-list.component';
import { NewDeviceComponent } from './pages/home/main/new-device/new-device.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { 
    path: 'Home', 
    component: HomeComponent,
    children: [
      { 
        path: 'Main', 
        component: MainComponent,
        children: [
          { path: 'DetailDevice/:id', component: DetailDeviceComponent },
          { path: 'DevicesList', component: DevicesListComponent },
          { path: 'NewDevice', component: NewDeviceComponent },
          { path: '**', pathMatch: 'full', redirectTo: 'DevicesList' }
        ] 
      },
      { path: 'Profile', component: ProfileComponent },
      { path: 'Support', component: SupportComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'Main' }
    ] 
   },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
