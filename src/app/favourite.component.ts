import { Component, Input, NgModule} from '@angular/core';
import { Http, Response} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { MoviesService } from './movies.service';

@Component({
    selector: 'app-favourite-board',
    templateUrl: 'favourite.component.html',
    styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent {
    title: 'favourites....';
}
