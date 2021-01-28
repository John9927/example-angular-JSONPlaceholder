import { Data } from './../data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = "https://jsonplaceholder.typicode.com/posts";
@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private http: HttpClient,) {}

    getData(): Observable<Data> {
      return this.http.get<Data>(url)
    }

    getDetail(id: number): Observable<Data>{
      return this.http.get<Data>(`${url}/${id}`);

    }

}
