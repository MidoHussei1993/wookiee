import {
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


export interface State {
  user:'i'
}

// export const reducers: ActionReducerMap<State> = {

// };


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
