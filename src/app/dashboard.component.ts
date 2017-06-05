import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { GenreService } from './genre.service';
import 'rxjs/add/operator/switchMap';
import {MoviesService} from './movies.service';
import {FavouritesService} from './favourites.service';
import {Http, Response} from '@angular/http';

@Component({
    selector: 'app-dash-board',
    templateUrl: './dashboard.template.html',
    styleUrls: ['./dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
    moviedata: Array<Object>;
    pager: number;
    @Input('placeholder')
    text = 'Search for a movie here...';
    genre= [];
    selected_movie = null;
    searchval: string;
    total: number;
    favourite: boolean;


    onSelect(movie) {
        this.selected_movie = movie;
    }

    clearSelection() {
        this.selected_movie = null;
    }

    constructor(private genreserve: GenreService, private movieserve: MoviesService, private favserve: FavouritesService, private http: Http) {
        this.genreserve.getGenre()
            .subscribe(
                data => this.genre = data.genres,
                error => alert(error)
            );
    }
    addToFav(movie) {
        this.favserve.postMovies(movie).subscribe( data => {
            this.favourite = true; alert('This movie has been added to your favourites\' list');
        });

    }
    deleteFromFav(movie) {
        return this.favserve.deleteMovies(movie).subscribe(data => {
            this.favourite = false; alert('This movie has been removed from your favourites\' list');

        });

    }
    favcheck(movie) {
    if (movie) {
        this.favserve.checkStatus(movie).subscribe(data => {
            this.favourite = data;
            });
        }
        // const url = `http://localhost:4000/api/favourites/exists/${movie}`;
        // return this.http.get(url).map(res => res.json()).subscribe(data => {
        //     return data._body;
        // });
    }

    search(movie) {
        this.searchval = movie.value;
        this.pager = 1;
        if (movie.value) {
           return  this.movieserve.getMovies(this.searchval, this.pager).subscribe(data => {
               this.moviedata = data.results; this.total = data.total_pages;
            });

        }
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
