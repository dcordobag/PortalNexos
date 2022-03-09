import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Editorial, EditorialResponse } from '../models/Editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  constructor(readonly http: HttpClient) {
  }


  getEditorials(): Observable<EditorialResponse> {
    let url: string = `${environment.nexosService.endpoint}${environment.nexosService.editorial.search}`;
    return this.http.get<EditorialResponse>(url);
  }

  createEditorial(editorial: Editorial): Observable<EditorialResponse> {
    const url = `${environment.nexosService.endpoint}${environment.nexosService.editorial.create}`;
    return this.http.post<EditorialResponse>(url, editorial);
  }
}
