import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteAuthorsComponent } from './favorite-authors/favorite-authors.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AuthorRoutingModule } from './author-routing.module';



@NgModule({
  declarations: [AuthorsComponent, FavoriteAuthorsComponent, ListItemComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
