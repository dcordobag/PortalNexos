import { Component, OnInit } from '@angular/core';
import { BookService } from '@serv/book.service';
import { Book, BookResponse } from 'src/app/models/Book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  bookList: Book[] = [];
  searchType = 'título';
  selectedSearchType: string = '';
  lodaing = true;

  constructor(readonly bookService: BookService) { }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList() {
    this.bookService.getBooks().subscribe((data: BookResponse) => {
      this.bookList = data.data;
      this.lodaing = false;
    }, (err => {
      this.lodaing = false;
    }));
  }

  onSelectChange($event: string) {
    this.selectedSearchType = $event;
    this.configureSearchFilter(false);
  }
  onSearch(text: string) {
    this.configureSearchFilter(true, text);
  }

  configureSearchFilter(makeRequest: boolean, valueToSearch?: string) {
    switch (this.selectedSearchType) {
      case 'title':
        this.searchType = 'título';
        if (makeRequest && valueToSearch) {
          this.bookService.getBooksByTitle(valueToSearch).subscribe((data: BookResponse) => {
            this.bookList = data.data;
            this.lodaing = false;
          }, (err => {
            this.lodaing = false;
          }));
        } else {
          this.getBookList();
        }
        break;
      case 'year':
        this.searchType = 'año';
        if (makeRequest && valueToSearch) {
          this.bookService.getBooksByYear(valueToSearch).subscribe((data: BookResponse) => {
            this.bookList = data.data;
            this.lodaing = false;
          }, (err => {
            this.lodaing = false;
          }));
        } else {
          this.getBookList();
        }
        break;
      case 'author':
        this.searchType = 'autor';
        if (makeRequest && valueToSearch) {
          this.bookService.getBooksByAuthor(valueToSearch).subscribe((data: BookResponse) => {
            this.bookList = data.data;
            this.lodaing = false;
          }, (err => {
            this.lodaing = false;
          }));
        } else {
          this.getBookList();
        }
        break;
      default:
        this.getBookList();
        break;
    }
  }
}
