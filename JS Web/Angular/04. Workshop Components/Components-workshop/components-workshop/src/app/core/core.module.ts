import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule, RouterModule, AuthModule, SharedModule, 
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
