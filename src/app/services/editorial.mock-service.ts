import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Editorial, EditorialResponse } from '../models/Editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialMockService {

  constructor(readonly http: HttpClient) {
  }


  getEditorials(): Observable<EditorialResponse> {
    return of({
      data: [{
        correspondenceAddress: 'test',
        email: 'test@test.com',
        id: 1,
        maxBooks: 100,
        name: 'text',
        phone: 'test'
      }],
      estatusCode: 200,
      message: ''
    });
  }

  createEditorial(editorial: Editorial): Observable<EditorialResponse> {
    return of({
      data: [],
      estatusCode: 200,
      message: ''
    })
  }
}
