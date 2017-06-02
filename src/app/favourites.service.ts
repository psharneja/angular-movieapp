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
}
