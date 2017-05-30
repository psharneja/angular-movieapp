import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { MoviesService } from './movies.service';

import {ROUTER_PROVIDERS} from '@angular/router/src/router_module';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule, InfiniteScrollModule
  ],
  providers: [ MoviesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
