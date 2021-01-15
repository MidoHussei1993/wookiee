import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { END_POINTS } from 'src/app/core/Http/globals';
import { HttpClientService } from 'src/app/core/Http/http-client.service';
import { Movie } from '../../model';
import { map } from 'rxjs/operators';

const API_URL = END_POINTS.movies;
type allMovies = {movies:[]}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClientService) {}

  getAll(): Observable<Movie[]>{ 
    return this.http.get<allMovies>({ url: API_URL })
    .pipe(
      map((res : allMovies) => res.movies)
    );
  }

}
