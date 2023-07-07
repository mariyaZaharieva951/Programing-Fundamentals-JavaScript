import { RouterModule, Routes } from '@angular/router';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  
   {path: 'themes', 
    children: [
        {
            path: 'list',
            component: ThemesListComponent
        },
        {
            path: 'create', 
            component: CreateComponent
        }

    ]},
  
];


export const ThemeRouterModule = RouterModule.forChild(routes);
