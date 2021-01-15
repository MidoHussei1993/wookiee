import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { MovieService } from '../../services/api/movie.service';
import * as MovieActions from '../action/movie.actions'

@Injectable()
export class MovieEffects {



  constructor(private actions$: Actions,
    private movieServiec: MovieService,
    ) {}

    @Effect()
    loadShopList$ : Observable<Action>= this.actions$.pipe(
      
        ofType(MovieActions.MovieActionTypes.LOAD_MOVIES)

        ,mergeMap((action : MovieActions.LoadMovies)=>
        
        this.movieServiec.getAll().pipe( map((movie:any[])=> new MovieActions.UPDATE_Movie_SUCCESS(movie),
        catchError(err => of(new MovieActions.UPDATE_Movie_FAIL(err)))
        ))
        )
    )
}
