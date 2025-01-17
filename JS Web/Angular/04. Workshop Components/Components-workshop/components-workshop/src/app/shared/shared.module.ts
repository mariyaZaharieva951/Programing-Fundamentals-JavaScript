import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthActivate } from './guards/auth.activate';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, RouterModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class SharedModule { }
