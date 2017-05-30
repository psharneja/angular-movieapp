import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
    result: any[];

    constructor(private http: Http) { };
    getGenre () {
     const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US`;
        return this.http.get(url).map(res => res.json());

    }

    getMovies (movie) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US&query=${encodeURIComponent(movie.value)}&page=1`;
        return this.http.get(url).map(res => res.json());
    }
    getmoreMovies(movie, page) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US&query=${encodeURIComponent(movie.value)}&page=${page}`;
        return this.http.get(url).map(res => res.json());
    }
}
