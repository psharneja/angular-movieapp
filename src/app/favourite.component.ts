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
    movies;
    selected_movie = null;


    constructor(private favserve: FavouritesService, private genreserve: GenreService) {

    this.searcher();

    }

    ngOnInit() {
        return  this.favserve.getMovies().subscribe(data => {
            this.moviedata = data; this.movies = this.moviedata;
        });
    }
    searcher() {

        this.genreserve.getGenre()
            .subscribe(
                data => this.genre = data.genres,
                error => alert(error)
            );
    }
    onSelect(movie) {
        this.selected_movie = movie;
    }
    clearSelection() {
        this.selected_movie = null;
    }




    replacer(genre) {
        const genrename = new Array;
        if (genre) {
        this.genre.forEach(d => {
            if (genre.includes(d.id)) {
                genrename.push(' ' + d.name);
            }

         });
        }
        return genrename;
    }

    categoryCall(category) {
        this.search();

        this.moviedata.forEach((d, i) => {
           // console.log(Object.keys(d));
        });
    }

    search() {

            return  this.favserve.getMovies().subscribe(data => {
                 this.moviedata = data;
             });

        }

        deleteFromFav(movie) {
         this.favserve.deleteMovies(movie).subscribe(data => {
             alert('This has now been removed from your favourites\' list');
             this.searcher();

        });

        }
    updateMovie(movie, details, adult, release, score) {
        movie.overview = details.value;
        movie.adult = adult.value;
        movie.release_date = release.value;
        movie.vote_average = score.value;
        return this.favserve.updateMovies(movie).subscribe(data => {
            alert('Record has been updated');
        });
    }

}

