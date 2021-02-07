import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BookServiceService {

  baseUrl = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  readAllBooks() {
    let url: string = this.baseUrl + '/books'
    return this.http.get('http://localhost:3000/api/books/')
  }

}
