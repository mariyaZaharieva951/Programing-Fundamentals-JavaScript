import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [PostsListComponent, ThemesListComponent, MainComponent, CreateComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [MainComponent, PostsListComponent, ThemesListComponent, CreateComponent]
})
export class FeatureModule { }
