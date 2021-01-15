import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MovieState, selectCurrentMovieProperty } from 'src/app/shared/state/reducer/movie.reducer';
import { Movie } from '../shared/model';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie:Movie = new Movie();
  constructor(
    private store: Store<MovieState>,
  ) { }

  ngOnInit(): void {
    this.store
      .pipe(select(selectCurrentMovieProperty)).subscribe(res=>{
        console.table(res)
      })
  }

}
