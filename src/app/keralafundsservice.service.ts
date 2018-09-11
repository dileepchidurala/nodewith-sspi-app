import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Detail } from './postdetails';

@Injectable({
  providedIn: 'root'
})
export class KeralafundsserviceService {
  private url = 'http://172.16.117.245:3000/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getuser(): Observable<any> {
    return this.http
      .get(this.url + 'user', { withCredentials: true })
      .pipe(catchError(this.handleError('getuser', [])));
  }

  getfullname(userId: string) {
    return this.http
      .get(`${this.url}api/fullname/?id=${userId}`)
      .pipe(catchError(this.handleError('validate')));
  }

  validate(userId: string) {
    return this.http
      .get(`${this.url}api/validate/?id=${userId}`)
      .pipe(catchError(this.handleError('validate')));
  }

  postamount(details: Detail): Observable<any> {
    return this.http
      .post(this.url + 'api/contribute', details, this.httpOptions)
      .pipe(catchError(this.handleError<Detail>('postamount')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead
      result = error.status;
      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      // console.log(result as T);
      return of(result as T);
    };
  }
}
