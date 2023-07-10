import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ThemeRouterModule } from './feature-routing.module';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PostsListComponent, ThemesListComponent, MainComponent, CreateComponent, ThemeDetailsComponent],
  imports: [
    CommonModule, RouterModule, ThemeRouterModule, SharedModule
  ],
  exports: [MainComponent, PostsListComponent, ThemesListComponent, CreateComponent, ThemeDetailsComponent]
})
export class FeatureModule { }
