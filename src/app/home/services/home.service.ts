import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cidade } from '../models/Cidade';
import { Cargo } from '../models/Cargo';

const cidadeAPI = 'https://www.empregos.com.br/user-controls/hdlSugest2.ashx?t=CE&term='
const cargoAPI = 'https://www.empregos.com.br/user-controls/hdlSugest2.ashx?t=C&term='

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCidades(cidade?: string): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(cidadeAPI + cidade)
      .pipe(
        catchError(this.handleError('getCidades', []))
      )
  }

  getCargos(cargo: string): Observable<Cargo[]>{
    return this.http.get<Cargo[]>(cargoAPI + cargo)
    .pipe(
      catchError(this.handleError('getCargos', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}