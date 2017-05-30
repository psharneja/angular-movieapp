import {ChangeDetectionStrategy, Component, enableProdMode, Input, NgModule} from '@angular/core';
import {Jsonp, Http, Response} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { GenreService } from './genre.service';

enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [GenreService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    selected_movie = {};
    moviedata: any[];
    pager = 1;
    @Input('placeholder')
    text = 'Search for a movie here...';
    genre= [];

    constructor(private jsonp: Jsonp, private http: Http, private genreserve: GenreService) {
    }

    search(movie) {
        if (movie.value) {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US&query=${encodeURIComponent(movie.value)}&page=1&callback=JSONP_CALLBACK`;
            return this.jsonp.get(url).subscribe(data => {
                this.moviedata = data.json().results;  ;

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
        let genrename = [];
        this.genreserve.getGenre()
            .subscribe(
                data => this.genre = data.genres,
                error => alert(error)
            );

        this.genre.forEach(d =>{
            if(genre.includes(d.id)){
                genrename.push(' '+ d.name);
            }

        });
        return genrename;

        // return;
    }

    onScroll(movie) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US&query=${encodeURIComponent(movie.value)}&page=${++this.pager}&callback=JSONP_CALLBACK`;
        return this.jsonp.get(url).subscribe(data => {
            (data.json().results).forEach(d => {
               this.moviedata.push(d);
            });
        });


    }
}





