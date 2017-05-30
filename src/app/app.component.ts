import {Component, Input, NgModule} from '@angular/core';
import {JsonpModule, Jsonp} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


const genres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
];


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    selected_movie = {};
    genredata = {};
    moviedata: any[];
    pager= 1;

    @Input('placeholder')
    text = 'Search for a movie here...';
    constructor(private jsonp: Jsonp) {  }
    search(movie) {
        if (movie.value) {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US&query=
            ${encodeURIComponent(movie.value)}&page=${this.pager}&callback=JSONP_CALLBACK`;
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
//   var arr[];
        const convertedData = [];
        if (genre) {
        genre.forEach(function (data, i) {
            genres.forEach(function (d, j) {
                if (d.id === data) {
                    convertedData.push(d.name);

                }
            });

        });
    }
        return convertedData;
    }
    onScroll(movie, moviedata) {
        console.log(moviedata);

        const url = `https://api.themoviedb.org/3/search/movie?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US&query=
            ${encodeURIComponent(movie.value)}&page=${this.pager++}&callback=JSONP_CALLBACK`;
        return this.jsonp.get(url).subscribe(data => {this.moviedata.push(data.json().results); });


    }
}





