import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { ListAuthorComponent } from './list-author/list-author.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    CreateAuthorComponent,
    ListAuthorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
