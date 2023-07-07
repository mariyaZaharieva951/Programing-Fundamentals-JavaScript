import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule, RouterModule, AuthRoutingModule
  ],
  exports: [
    LoginComponent, RegisterComponent, ProfileComponent
  ]
})
export class AuthModule { }
