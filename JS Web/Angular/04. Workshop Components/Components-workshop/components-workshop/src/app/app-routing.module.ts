import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { MainComponent } from './feature/main/main.component';
import { CreateComponent } from './feature/create/create.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainComponent},
  {path: 'home', component: HomeComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
