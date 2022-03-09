import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Author, AuthorResponse } from '../models/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(readonly http: HttpClient) {
  }


  getAuthors(): Observable<AuthorResponse> {
    let url: string = `${environment.nexosService.endpoint}${environment.nexosService.author.search}`;
    return this.http.get<AuthorResponse>(url);
  }

  createAuthor(author: Author): Observable<AuthorResponse> {
    const url = `${environment.nexosService.endpoint}${environment.nexosService.author.create}`;
    return this.http.post<AuthorResponse>(url, author);
  }
}
