import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteAuthorsComponent } from './favorite-authors/favorite-authors.component';



const routes: Routes = [
    {
        path: 'authors',
        component: AuthorsComponent
    },
    {
        path: 'favorite-author',
        component: FavoriteAuthorsComponent
    },
    {
        path: '', 
        redirectTo: '/authors', 
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
