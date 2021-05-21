import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) {


  }
  get(apiAddress: string):Observable<Object> {
   return this.http.get(`https://localhost:44322/api/${apiAddress}`)
  }

}
