import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../reducers/index';
import { MovieActions,  MovieActionTypes } from '../action/movie.actions';
import { Movie } from '../../model';

export const permissionFeatureKey = 'permission';

export interface State extends fromRoot.State {
  Movie: MovieState
}
export interface MovieState{
  list: Movie[];
  currentMovie :Movie
  error:string;
}

export const initialState: MovieState = {
  list: [],
  currentMovie: new Movie,
  error:''
};

//selectors
const getMovieFeatureState = createFeatureSelector<MovieState>('Movie');

export const selectMovieListProperty = createSelector(
  getMovieFeatureState,
  (state: MovieState ) => state.list
);
export const selectCurrentMovieProperty = createSelector(
  getMovieFeatureState,
  (state: MovieState ) => state.currentMovie
);


export function reducer(state = initialState, action: MovieActions): MovieState {
  switch (action.type) {
 
    case  MovieActionTypes.Get_MOVIES_SUCCESS: {
      return {
        ...state,
        list: action.payload
      }
    }
    case  MovieActionTypes.ADD_CURRENT_MOVIE: {
      return {
        ...state,
        currentMovie: action.payload
      }
    }
    case  MovieActionTypes.GET_MOVIES_FAIL: {

      return {
        ...state,
        error: action.payload?action.payload :'server error for gitting data'
      }
    }
 
    default:
      return state;
  }
}
