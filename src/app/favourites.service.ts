import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { GenreService } from './genre.service';

@Injectable()
export class FavouritesService {
    constructor(private http: Http) { };

    getMovies () {
        const url = `http://localhost:4000/api/favourites/`;
        return this.http.get(url).map(res => res.json());
    }
    postMovies (movie) {
        const url = `http://localhost:4000/api/favourites/`;
        return this.http.post(url, movie);
    }
    checkStatus(movie) {
    const url = `http://localhost:4000/api/favourites/${movie}`;
        return this.http.get(url).map(res => res.json());
    }
    deleteMovies (movie) {
        const url = `http://localhost:4000/api/favourites/${movie}`;
        return this.http.delete(url).map(res => res.json());
    }
    updateMovies (movie) {
        const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        const url = `http://localhost:4000/api/favourites/${movie.id}`;
        return this.http.put(url, movie, headers);
    }
}
