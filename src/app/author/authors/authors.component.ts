import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/Models/Author';
import { AuthorService } from 'src/app/Services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];
  favoriteAuthors: Author[] = [];
  p: number = 1;
  limit: number = 10;
  skip : number = 0;
  totalItems: any;
  constructor(public authorService : AuthorService) { }

   ngOnInit(): void {
    this.loadFavoriteAuthors();
    this.loadAuthors();
  }

  onPageChange = (pageNumber) => {
      this.skip = (pageNumber - 1) * this.limit;
      this.loadAuthors();
  }

  loadAuthors(){
    this.authorService.getAuthors(this.limit, this.skip).subscribe((response) => {
      this.authors = response['results'] as Author[];
      
      this.authors.forEach(element => {
        var isFavoriteAuthor =  this.containsFavoriteAuthor(element, this.favoriteAuthors);
        element.isFavoriteAuthor = isFavoriteAuthor === true ? true : false;
      });
      this.totalItems = response['totalCount'];
    })
  }

  containsFavoriteAuthor(obj, list) {
    return list.some(elem => elem['_id'] === obj['_id']);
  }

  loadFavoriteAuthors(){
    this.favoriteAuthors = this.authorService.getFavoriteAuthors();
  }
}
