import { Component, Input } from '@angular/core';
import { GenreService } from './genre.service';
import 'rxjs/add/operator/switchMap';
import {MoviesService} from './movies.service';

@Component({
    selector: 'app-dash-board',
    templateUrl: './dashboard.template.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
    moviedata: Array<Object>;
    pager = 1;
    @Input('placeholder')
    text = 'Search for a movie here...';
    genre= [];
    selected_movie = null;
    searchval: string;
    total: number;



    onSelect(movie) {
        console.log("selct called"+ movie);
        this.selected_movie = movie;
    }

    clearSelection() {
        this.selected_movie = null;
    }


    constructor(private genreserve: GenreService, private movieserve: MoviesService) {
        this.genreserve.getGenre()
            .subscribe(
                data => this.genre = data.genres,
                error => alert(error)
            );
    }

    search(movie) {
        this.searchval = movie.value;
        if (movie.value) {
           return  this.movieserve.getMovies(this.searchval, this.pager).subscribe(data => {
               this.moviedata = data.results; this.total = data.total_pages;
            });

        }
    }

    replacer(genre) {
         const genrename = [];


           /* this.movieserve.getGenre()
                .subscribe(
                    data => this.genre = data.genres,
                    error => alert(error)
                );*/

            this.genre.forEach(d => {
                if (genre.includes(d.id)) {
                    genrename.push(' ' + d.name);
                }

            });
            return genrename;

        // return;
    }

    onScroll() {
        if ((this.searchval) && (this.pager < this.total ) ) {
            return this.movieserve.getMovies(this.searchval, ++this.pager).subscribe(data => {
                (data.results).forEach(d => {
                    this.moviedata.push(d);
                });
            });
        }

    }
}
