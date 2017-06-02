import {Component, Input, NgModule, OnInit} from '@angular/core';
import { Http, Response} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { FavouritesService } from './favourites.service';
import { GenreService } from './genre.service';

@Component({
    selector: 'app-favourite-board',
    templateUrl: './favourite.template.html',
    styleUrls: ['./dashboard.component.css'],
})

export class FavouriteComponent implements OnInit {
    moviedata: Array<Object>;
    genre;
    genres = new Array;


    constructor(private favserve: FavouritesService, private genreserve: GenreService) {

        this.genreserve.getGenre()
            .subscribe(
                data => this.genre = data.genres,
                error => alert(error)
            );


    }

    ngOnInit() {
        return  this.favserve.getMovies().subscribe(data => {
            this.moviedata = data;
        });
    }


    replacer(genre) {
        const genrename = [];
        this.genre.forEach(d => {
            if (genre.includes(d.id)) {
                genrename.push(' ' + d.name);
            }

        });
        return genrename;
    }

    search() {

            return  this.favserve.getMovies().subscribe(data => {
                 this.moviedata = data;
             });

        }

}

