import { Component, Input } from '@angular/core';
import { MoviesService } from './movies.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-dash-board',
    templateUrl: './dashboard.template.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
    moviedata: any[];
    pager = 1;
    @Input('placeholder')
    text = 'Search for a movie here...';
    genre= [];
    selected_movie = {};
    searchval: string;



    onSelect(movie) {
        this.selected_movie = movie;
    }

    clearselection() {
        this.selected_movie = {};
    }


    constructor(private movieserve: MoviesService) {}

    search(movie) {
        this.searchval = movie.value;
        if (movie.value) {
           return  this.movieserve.getMovies(movie.value).subscribe(data => {
                this.moviedata = data.results;
            });

        }
    }

    replacer(genre) {
        /* const genrename = [];


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
    */
        // return;
    }

    onScroll() {
        return this.movieserve.getmoreMovies(this.searchval, ++this.pager).subscribe(data => {
            (data.results).forEach(d => {
                this.moviedata.push(d);
            });
        });


    }
}
