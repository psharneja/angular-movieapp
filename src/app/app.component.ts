import {Component, Input, NgModule} from '@angular/core';
import {Jsonp} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { GenreService } from './genre.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    selected_movie = {};
    genredata = {};
    moviedata: any[];
    pager = 1;
    @Input('placeholder')
    text = 'Search for a movie here...';

    constructor(private jsonp: Jsonp, private genreserve: GenreService) {
    }

    search(movie) {
        if (movie.value) {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US&query=${encodeURIComponent(movie.value)}&page=1&callback=JSONP_CALLBACK`;
            return this.jsonp.get(url).subscribe(data => {
                this.moviedata = data.json().results;
            });
        }
    }

    onSelect(movie) {
        this.selected_movie = movie;
    }

    clearselection() {
        this.selected_movie = {};
    }

    replacer(genre) {
//   var arr[];
        this.genreserve.getGenre();

     }

    onScroll(movie, moviedata) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US&query=${encodeURIComponent(movie.value)}&page=${++this.pager}&callback=JSONP_CALLBACK`;
        return this.jsonp.get(url).subscribe(data => {
            (data.json().results).forEach(d => {
               this.moviedata.push(d);
            });
        });


    }
}





