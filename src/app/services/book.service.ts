import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Book, BookResponse } from '../models/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(readonly http: HttpClient) {
  }


  getBooks(): Observable<BookResponse> {
    let url: string = `${environment.nexosService.endpoint}${environment.nexosService.book.search}`;
    return this.http.get<BookResponse>(url);
  }
  getBooksByTitle(valueToSearch: string): Observable<BookResponse> {
    let url: string = `${environment.nexosService.endpoint}${environment.nexosService.book.searchByTitle}${valueToSearch}`;
    return this.http.get<BookResponse>(url);
  }
  getBooksByYear(valueToSearch: string): Observable<BookResponse> {
    let url: string = `${environment.nexosService.endpoint}${environment.nexosService.book.searchByYear}${valueToSearch}`;
    return this.http.get<BookResponse>(url);
  }
  getBooksByAuthor(valueToSearch: string): Observable<BookResponse> {
    let url: string = `${environment.nexosService.endpoint}${environment.nexosService.book.searchByAuthor}${valueToSearch}`;
    return this.http.get<BookResponse>(url);
  }

  createBook(book: Book): Observable<BookResponse> {
    const url = `${environment.nexosService.endpoint}${environment.nexosService.book.create}`;
    return this.http.post<BookResponse>(url, book);
  }

}
