import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GenreService {
    result: any[];

    constructor(private http: Http) { };
    getGenre () {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US`;
        return this.http.get(url).map(res => res.json());

    }


}
