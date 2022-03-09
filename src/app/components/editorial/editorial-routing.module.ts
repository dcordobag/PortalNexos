import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditorialComponent } from './create-editorial/create-editorial.component';
import { ListEditorialComponent } from './list-editorial/list-editorial.component';

const routes: Routes = [
  {
    path: 'editorials',
    component: ListEditorialComponent,
    pathMatch: 'full',
  },
  {
    path: 'addeditorials',
    component: CreateEditorialComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorialRoutingModule { }
