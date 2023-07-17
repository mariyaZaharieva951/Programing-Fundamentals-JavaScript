import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  
   {path: 'themes', 
    children: [
        {
            path: 'list',
            component: MainComponent
        },
        {
            path: 'create', 
            component: CreateComponent
        },
        {
            path: ':themeId',
            component: ThemeDetailsComponent
        }

    ]},
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class ThemeRouterModule{};
