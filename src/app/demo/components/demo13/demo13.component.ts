import { Component, OnInit } from '@angular/core';
import { ConsoApiService, Movie, User } from './conso-api.service';

@Component({
  selector: 'app-demo13',
  templateUrl: './demo13.component.html',
  styleUrls: ['./demo13.component.scss']
})
export class Demo13Component implements OnInit {

  currentUser! : User

  movieList : Movie[] = []
  currentMovie! : Movie

  constructor(
    private conso : ConsoApiService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.conso.connect().subscribe(
      (user : User) => {
        this.currentUser = user
        console.log(this.currentUser.token)
        localStorage.setItem("token", this.currentUser.token)
      },
      (error) => console.log(error.message)
    )
  }

  loadMovie() {
    this.conso.getAllMovie().subscribe(
      (movieListFromApi : Movie[]) => {
        this.movieList = movieListFromApi
      }
    )
  }

  loadOneMovie() {
    this.conso.getOneMovie(1).subscribe(
      (movieFromApi : Movie) => {
        this.currentMovie = movieFromApi
      }
    )
  }

}
