import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './feature/main/main.component';
import { ThemesListComponent } from './feature/themes-list/themes-list.component';
import { PostsListComponent } from './feature/posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { FeatureModule } from './feature/feature.module';
import { ThemeRouterModule } from './feature/feature-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    FeatureModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
