import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/Models/author';
import { AuthorService } from 'src/app/Services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];
  p: number = 1;
  limit: number = 10;
  skip : number = 0;
  totalItems: any;
  constructor(public authorService : AuthorService) { }

   ngOnInit(): void {
    this.loadAuthors();
  }

  onPageChange = (pageNumber) => {
      this.skip = (pageNumber - 1) * this.limit;
      this.loadAuthors();
  }

  loadAuthors(){
    this.authorService.getAuthorsForPagination(this.limit, this.skip).subscribe((response) => {
      this.authors = response['results'] as Author[];
      this.totalItems = response['totalCount'];
  })
  
  }

}
