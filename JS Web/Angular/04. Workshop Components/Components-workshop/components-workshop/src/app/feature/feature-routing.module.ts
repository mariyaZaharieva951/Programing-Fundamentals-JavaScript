import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { MainComponent } from './main/main.component';


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
            path: 'details/:id',
            component: ThemeDetailsComponent
        }

    ]},
  
];


export const ThemeRouterModule = RouterModule.forChild(routes);
