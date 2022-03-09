import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { ListBookComponent } from './list-book/list-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListBookComponent,
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookRoutingModule
  ]
})
export class BookModule { }
