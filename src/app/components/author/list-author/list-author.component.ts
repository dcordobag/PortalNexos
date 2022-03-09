import { Component, OnInit } from '@angular/core';
import { AuthorService } from '@serv/author.service';
import { Author, AuthorResponse } from 'src/app/models/Author';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {
  authorsList: Author[] = [];

  constructor(readonly authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAuthorsList();
  }

  getAuthorsList() {
    this.authorService.getAuthors().subscribe((data: AuthorResponse) => {
      this.authorsList = data.data;
    });
  }
}
