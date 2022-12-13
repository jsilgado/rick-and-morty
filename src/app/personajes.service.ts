import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'https://rickandmortyapi.com/api';

  }

  getAll(pPage = 1): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/character?page=${pPage}`);
  }

}


