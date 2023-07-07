import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PostsListComponent, ThemesListComponent, MainComponent, CreateComponent],
  imports: [
    CommonModule, RouterModule, AuthModule, SharedModule
  ],
  exports: [MainComponent, PostsListComponent, ThemesListComponent, CreateComponent]
})
export class FeatureModule { }
