import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialRoutingModule } from './editorial-routing.module';
import { ListEditorialComponent } from './list-editorial/list-editorial.component';
import { CreateEditorialComponent } from './create-editorial/create-editorial.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    ListEditorialComponent,
    CreateEditorialComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    EditorialRoutingModule
  ]
})
export class EditorialModule { }
