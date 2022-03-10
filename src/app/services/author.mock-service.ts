import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Author, AuthorResponse } from '../models/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorMockService {
  constructor(readonly http: HttpClient) {
  }


  getAuthors(): Observable<AuthorResponse> {
    return of({
      estatusCode: 200,
      data: [{
        birthdate: new Date(),
        email: 'test@correo.com',
        fullName: 'test',
        id: 1,
        originCity: 'test'
      }],
      message: ''
    });
  }

  createAuthor(author: Author): Observable<AuthorResponse> {
    return of({
      estatusCode: 200,
      data: [],
      message: ''
    });
  }
}
