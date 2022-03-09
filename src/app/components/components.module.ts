import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { EditorialModule } from './editorial/editorial.module';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { ComponentsComponent } from './components.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    EditorialModule,
    BookModule,
    AuthorModule,
    HttpClientModule
  ]
})
export class ComponentsModule { }
