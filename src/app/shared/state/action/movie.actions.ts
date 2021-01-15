import { Action } from '@ngrx/store';
import { Movie } from '../../model';

export enum MovieActionTypes {
  LOAD_MOVIES = '[MOVIE] Load Permissions',
  Get_MOVIES_SUCCESS = '[MOVIE] get movie SUCCESS by api',
  GET_MOVIES_FAIL = '[MOVIE] get movie FAIL by api',
  ADD_CURRENT_MOVIE='[MOVIE] load current movie to navigate to it'

}

export class LoadMovies implements Action {
  readonly type = MovieActionTypes.LOAD_MOVIES;
}
export class UPDATE_Movie_SUCCESS implements Action {
  readonly type = MovieActionTypes.Get_MOVIES_SUCCESS;
  constructor(public payload: Movie[]) { }

}
export class UPDATE_Movie_FAIL implements Action {
  readonly type = MovieActionTypes.GET_MOVIES_FAIL;
  constructor(public payload: string) { }
}
export class ADD_CURRENT_MOVIE implements Action {
  readonly type = MovieActionTypes.ADD_CURRENT_MOVIE;
  constructor(public payload: Movie) { }

}



export type MovieActions =
  LoadMovies |
  UPDATE_Movie_SUCCESS |
  ADD_CURRENT_MOVIE |
  UPDATE_Movie_FAIL;
