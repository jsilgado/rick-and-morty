import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getAll(pPage = 1): Promise<any[]> {
    console.log(pPage);
    return this.http.get<any[]>(`${this.url}/character?page=${pPage}`).toPromise();
  }
}


