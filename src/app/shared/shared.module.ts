import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/reducer/movie.reducer';
import { MovieEffects } from './state/effect/movie.effects';



@NgModule({
  declarations: [MovieCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('Movie', reducer),
    EffectsModule.forFeature([MovieEffects])
  ],
  exports: [
    MaterialModule,
    MovieCardComponent,
  ]
})
export class SharedModule { }
