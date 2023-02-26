import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    }),
  };

  postData(url: string, inputData: any): Observable<any> {
    return this.http.post(url, inputData, this.httpOptions).pipe(
      map((json) => this.fromServerModel(json)),
      catchError(error => { return this.handleError(error) }),
      tap(() => { })
    );
  }

  getData(url: string, inputData: any): Observable<any> {
    return this.http.get(url, this.httpOptions).pipe(
      map((json) => this.fromServerModel(json)),
      catchError(error => { return this.handleError(error) }),
      tap(() => { })
    );
  }

  fromServerModel(json: any) {
    return json;
  }

  private handleError(error: Response | any) {
    return throwError(error);
  }
}
