import { Component, Input, NgModule} from '@angular/core';
import { Http, Response} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { MoviesService } from './movies.service';

@Component({
    selector: 'app-dash-board',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
    moviedata: any[];
    pager = 1;
    @Input('placeholder')
    text = 'Search for a movie here...';
    genre= [];
    selected_movie = {};



    onSelect(movie) {
        this.selected_movie = movie;
    }

    clearselection() {
        this.selected_movie = {};
    }



    constructor( private http: Http, private movieserve: MoviesService) {}

    search(movie) {
        if (movie.value) {
            return this.movieserve.getMovies(movie).subscribe(data => {
                this.moviedata = data.results;
            });
        }
    }

    replacer(genre) {
        const genrename = [];
        if (genre) {
            this.movieserve.getGenre()
                .subscribe(
                    data => this.genre = data.genres,
                    error => alert(error)
                );

            this.genre.forEach(d => {
                if (genre.includes(d.id)) {
                    genrename.push(' ' + d.name);
                }

            });
            return genrename;
        }
        // return;
    }

    onScroll(movie) {
        return this.movieserve.getmoreMovies(movie, ++this.pager).subscribe(data => {
            (data.results).forEach(d => {
                this.moviedata.push(d);
            });
        });


    }
}
