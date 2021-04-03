import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../Models/Author';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient, private SpinnerService: NgxSpinnerService) { }
  
  url : string = "https://api.quotable.io/authors";
  
  initializeFavoriteList(){
    if(localStorage.getItem('FavoriteAuthors') === null || localStorage.getItem('FavoriteAuthors') == undefined) {
      let favoriteAuthorEntry = [];
      localStorage.setItem('FavoriteAuthors', JSON.stringify(favoriteAuthorEntry));
    }
  }

  getAuthors(a,b){
    this.SpinnerService.show(); 
    var result = this.http.get(this.url + `?limit=${a}&skip=${b}`);
    setTimeout(() => {
      this.SpinnerService.hide();
    }, 500);
    return result;
  }

  getFavoriteAuthors(){
    this.initializeFavoriteList();
    return JSON.parse(localStorage.getItem('FavoriteAuthors'));
  }

  addFavorite(favoriteAuthor) {
    this.initializeFavoriteList();
    let favoriteAuthors = JSON.parse(localStorage.getItem('FavoriteAuthors'));
    favoriteAuthors.push(favoriteAuthor);
    localStorage.setItem('FavoriteAuthors', JSON.stringify(favoriteAuthors));
  }

  removeFavorite(favoriteAuthor){
    let favoriteAuthors = JSON.parse(localStorage.getItem('FavoriteAuthors'));
    var index = favoriteAuthors.findIndex(i => i._id === favoriteAuthor._id);
    favoriteAuthors.splice(index, 1);
    localStorage.setItem('FavoriteAuthors', JSON.stringify(favoriteAuthors));
  }

}
