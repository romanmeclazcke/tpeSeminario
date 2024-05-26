import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charter } from '../list-charters/Charter';

const APIURL="https://rickandmortyapi.com/api/character" 

@Injectable({
  providedIn: 'root'
})
export class DataCharterServices {
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Charter[]> {
    return this.http.get<Charter[]>(APIURL);
  }
}
