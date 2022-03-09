import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { ListBookComponent } from './list-book/list-book.component';

const routes: Routes = [
  {
    path: 'books',
    component: ListBookComponent,
    pathMatch: 'full',
  },
  {
    path: 'addbook',
    component: CreateBookComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
