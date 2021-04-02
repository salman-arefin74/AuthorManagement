import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../Models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }
  
  url : string = "https://api.quotable.io/authors";
  
  getAuthors(){
      return this.http.get<Author[]>(this.url);
  }

  getAuthorsForPagination(a,b){
    return this.http.get(this.url + `?limit=${a}&skip=${b}`);
  }

  getFavoriteAuthors(){
    if(localStorage.getItem('FavoriteAuthors') === null || localStorage.getItem('FavoriteAuthors') == undefined) {
      let favoriteAuthorEntry = [
      ];
      localStorage.setItem('FavoriteAuthors', JSON.stringify(favoriteAuthorEntry));
    }

    let favoriteAuthors = JSON.parse(localStorage.getItem('FavoriteAuthors'));
    return favoriteAuthors;
  }

  addFavorite(favoriteAuthor) {
    
    if(localStorage.getItem('FavoriteAuthors') === null || localStorage.getItem('FavoriteAuthors') == undefined) {
      let favoriteAuthorEntry = [
      ];
      localStorage.setItem('FavoriteAuthors', JSON.stringify(favoriteAuthorEntry));
    }
    
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
