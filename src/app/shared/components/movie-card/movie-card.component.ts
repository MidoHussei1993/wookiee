import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Movie } from '../../model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input('movie')movie:Movie = new Movie();
  @Output()navigate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  navigateToMoviePage(){
    this.navigate.emit(this.movie)
  }

}
