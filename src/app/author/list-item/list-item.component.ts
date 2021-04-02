import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/Models/Author';
import { AuthorService } from 'src/app/Services/author.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input('author') author: Author;
  @Output() loadAuthorEvent = new EventEmitter<Author>();
  favoriteAuthors: Author[] = [];
  constructor(public authorService : AuthorService) { }

  ngOnInit(): void {
  }

  AddRemoveFavorite(_author){
    this.author = _author;
    
    this.author.isFavoriteAuthor = this.author.isFavoriteAuthor === true ? false : true ;

    if(this.author.isFavoriteAuthor){
      this.authorService.addFavorite(this.author);
    }
    else{
      this.authorService.removeFavorite(this.author);
      this.loadAuthorEvent.emit();
    }
  }
}
