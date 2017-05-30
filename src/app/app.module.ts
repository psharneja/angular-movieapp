import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { MoviesService } from './movies.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FavouriteComponent } from './favourite.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, FavouriteComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule, InfiniteScrollModule,
      RouterModule.forRoot([
          {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
          },
          {
              path: 'dashboard/name',
              component: DashboardComponent
          },
          {
              path: 'dashboard',
              component: DashboardComponent
          },
          {
              path: 'favourites',
              component: FavouriteComponent
          }
      ])
  ],
  providers: [ MoviesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
