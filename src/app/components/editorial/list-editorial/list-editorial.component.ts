import { Component, OnInit } from '@angular/core';
import { EditorialService } from '@serv/editorial.service';
import { Editorial } from 'src/app/models/Book';
import { EditorialResponse } from 'src/app/models/Editorial';

@Component({
  selector: 'app-list-editorial',
  templateUrl: './list-editorial.component.html',
  styleUrls: ['./list-editorial.component.css']
})
export class ListEditorialComponent  implements OnInit {
  editorialsList: Editorial[] = [];

  constructor(readonly editorialService: EditorialService) { }

  ngOnInit(): void {
    this.getEditorialsList();
  }

  getEditorialsList() {
    this.editorialService.getEditorials().subscribe((data: EditorialResponse) => {
      this.editorialsList = data.data;
    });
  }
}
