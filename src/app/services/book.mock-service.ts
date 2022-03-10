import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, BookResponse } from '../models/Book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookMockService {

  mock = {
    estatusCode: 200,
    data: [{
      author: {
        birthdate: 'test',
        email: 'test@test.com',
        fullName: 'test',
        id: 1,
        originCity: 'test'
      },
      authorID: 1,
      editorial: {
        correspondenceAddress: 'test',
        email: 'test@test.com',
        id: 1,
        maxBooks: 100,
        name: 'text',
        phone: 'test'
      },
      editorialID: 1,
      genre: 'test',
      id: 1,
      pagesNumber: 100,
      title: 'test',
      year: '20200',

    }],
    message: ''
  };
  constructor(readonly http: HttpClient) {
  }


  getBooks(): Observable<BookResponse> {
    return of(this.mock);
  }
  getBooksByTitle(valueToSearch: string): Observable<BookResponse> {
    return of(this.mock);
  }
  getBooksByYear(valueToSearch: string): Observable<BookResponse> {
    return of(this.mock);
  }
  getBooksByAuthor(valueToSearch: string): Observable<BookResponse> {
    return of(this.mock);
  }

  createBook(book: Book): Observable<BookResponse> {
    return of({
      data: [],
      estatusCode: 200,
      message: ''
    })
  }

}
