import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Charter } from '../list-charters/Charter';

const APIURL = 'https://rickandmortyapi.com/api/character';

@Injectable({
  providedIn: 'root',
})
export class DataCharterServices {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Charter[]> {
    return this.http
      .get<Charter[]>(APIURL)
      .pipe(map((data) => this.transformData(data)));
  }

  private transformData(data: any): Charter[] {
    if (!data || !data.results) {
      return [];
    }

    return data.results.map((result: any) => ({
      name: result.name,
      status: result.status,
      species: result.species,
      gender: result.gender,
      image: result.image,
    }));
  }
}
