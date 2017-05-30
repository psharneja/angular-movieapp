import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/Rx';
 let genre = {};
@Injectable()
export class GenreService {

    constructor(private http: Http) { };
    getGenre () {
     const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=adc95135c737e8edc1358685af9a1c52&language=en-US`;
      this.http.get(url).map(data => {
         genre = data.json().results;
         console.log(data.json().results);
         console.log("knock knock");
         return;
      });

        // this.http.get(url).map(response => response.json()).subscribe(genres = response);
        // this.http.get(url).subscribe((res: Response ) => genres = res.json());
  //      return;
        // this.http.get(url).map((response: Response) => response.json().results);
    }
}
