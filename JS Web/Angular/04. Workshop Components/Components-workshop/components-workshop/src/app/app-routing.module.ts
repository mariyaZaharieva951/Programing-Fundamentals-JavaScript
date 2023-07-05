import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
