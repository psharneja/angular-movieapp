import {Component, Input, NgModule} from '@angular/core';
import {JsonpModule, Jsonp} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    selected_movie = {};
    genredata = {};
    moviedata: any[];

    @Input('placeholder')
    text = 'Search for a movie here...';
    constructor(private jsonp: Jsonp) {  }
    search(movie) {
        if (movie.value) {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=adc95135c737e8edc1358685af9a1c52&
            language=en-US&query=${encodeURIComponent(movie.value)}&callback=JSONP_CALLBACK`;
            return this.jsonp.get(url).subscribe(data => {this.moviedata = data.json().results; });
        }
    }

    onSelect(movie) {
        this.selected_movie = movie;
    }

    clearselection() {
    this.selected_movie =  {};
    }
    replacer(genre) {
        
    }
}




