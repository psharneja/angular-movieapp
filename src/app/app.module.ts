import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { GenreService } from './genre.service';

import {ROUTER_PROVIDERS} from '@angular/router/src/router_module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule, InfiniteScrollModule
  ],
  providers: [ GenreService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
