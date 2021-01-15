import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Movie } from 'src/app/shared/model';
import { MovieService } from 'src/app/shared/services/api/movie.service';
import { MovieState, selectMovieListProperty } from 'src/app/shared/state/reducer/movie.reducer';
import * as MovieActions from '../../shared/state/action/movie.actions'

type filteredMovie = {[key:string]:Movie[]} 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  genres :string[] = [];
  allMovies :Movie[] = [];
  filteredMovies :filteredMovie = {};
  currentBG: string =''
  constructor(
    private store: Store<MovieState>,
    private movieService : MovieService,
    private router :Router,
  ) { }

  ngOnInit(): void {
    this.getAllMovies()
    this.store.dispatch(new MovieActions.LoadMovies());

  }
  getAllMovies(){
    this.store
      .pipe(select(selectMovieListProperty)).subscribe(res =>{
      this.allMovies = res
      res.map(item =>{
        this.genres.push(...item.genres)
      })

      this.genres = [...new Set(this.genres)]
      this.filteredMovies = this.getFilteredMovies();
    })
  }
  getFilteredMovies() :filteredMovie{
    let filteredMovies:any ={}
    this.genres.map((item: string) =>{
      filteredMovies[item] = []
      this.allMovies.map((movie: Movie) =>{
        if(movie.genres.includes(item) ){
          filteredMovies[item].push(movie);
        }
      })
    })
    this.setBackGround()
    return filteredMovies;
  }
  navigateToMovieDetails(movie:Movie){
    this.store.dispatch(new MovieActions.ADD_CURRENT_MOVIE(movie))
    this.router.navigate(['movie-detatil'])

  }
  setBackGround(){
   let allBG = this.allMovies.map(item=> item.poster)
   let flag = 0
   setInterval(() => {
     this.currentBG = allBG[flag]
     if(flag == allBG.length)flag =0
     flag = flag+1;
   }, 10000)
   
   
   
  }

}
