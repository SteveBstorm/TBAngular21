import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsoApiService {

  private url : string = environment.urlApi

  currentUser! : User

  constructor(
    private _client : HttpClient
  ) { }

  connect() : Observable<User> {
    const info = {
      email : "steve.lorent@bstorm.be", password : "test1234"
    }
    return this._client.post<User>(this.url+"Auth/auth", info)
  }

  getAllMovie() : Observable<Movie[]> {
    return this._client.get<Movie[]>(this.url+"movie")
  }

  getOneMovie(id : number) : Observable<Movie> {
    /*const header = new HttpHeaders({
      'authorization' : 'bearer '+ localStorage.getItem("token") ?? ""
    })*/
    return this._client.get<Movie>(this.url+"movie/"+id)
    //return this._client.get<Movie>(this.url+"movie/"+id, {headers : header})
  }

  // connect2() {
  //   const info = {
  //     email : "test@test.com", password : "test1234"
  //   }
  //   this._client.post<User>(this.url+"Auth/auth", info).subscribe()
  // }
}

export interface User {
  id : number;
  email : string;
  token : string;
  isAdmin : boolean;
}

export interface Movie {
  id : number;
  title : string;
  description : string;
  releaseYear : number;
}
