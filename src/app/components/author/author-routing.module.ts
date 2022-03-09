import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { ListAuthorComponent } from './list-author/list-author.component';

const routes: Routes = [
  {
    path: 'authors',
    component: ListAuthorComponent,
    pathMatch: 'full',
  },
  {
    path: 'addauthor',
    component: CreateAuthorComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
