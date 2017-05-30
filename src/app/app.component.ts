import {ChangeDetectionStrategy, Component, enableProdMode, Input, NgModule} from '@angular/core';
import {Jsonp, Http, Response} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { MoviesService } from './movies.service';

enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}





