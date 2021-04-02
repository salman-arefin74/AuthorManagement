import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../Models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }
  
  url : string = "https://api.quotable.io/authors";
  serviceUrl : string = this.url;
  getAuthors(){
      return this.http.get<Author[]>(this.url);
  }
  getAuthorsForPagination(a,b){
    
    return this.http.get(this.url + `?limit=${a}&skip=${b}`);
  }
}
