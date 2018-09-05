import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Detail } from './postdetails';

@Injectable({
  providedIn: 'root'
})
export class KeralafundsserviceService {
  private url = 'http://153.65.41.154:3000/';
  public user: any = 'mock user';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getuser(): Observable<any> {
    return this.http.get(this.url + 'user', { withCredentials: true }).pipe(
      map(result => (this.user = result)),
      catchError(this.handleError('getuser', []))
    );
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
