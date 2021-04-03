import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/Models/Author';
import { AuthorService } from 'src/app/Services/author.service';

@Component({
  selector: 'app-favorite-authors',
  templateUrl: './favorite-authors.component.html',
  styleUrls: ['./favorite-authors.component.css']
})
export class FavoriteAuthorsComponent implements OnInit {
  favoriteAuthors: Author[] = [];
  p: number = 1;
  limit: number = 10;
  skip : number = 0;
  totalItems: any;
  NoFavoriteAuthor : boolean;
  constructor(public authorService : AuthorService) { }

   ngOnInit(): void {
    this.loadFavoriteAuthors();
  }

  onPageChange = (pageNumber) => {
      this.skip = (pageNumber - 1) * this.limit;
      this.loadFavoriteAuthors();
  }

  loadFavoriteAuthors(){
    this.favoriteAuthors = this.authorService.getFavoriteAuthors();
    this.totalItems = this.favoriteAuthors.length;
    this.NoFavoriteAuthor = this.totalItems === 0 ? true : false;
  }

}
