import { BookServiceService } from './../../services/book-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: any = []
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookService.readAllBooks().subscribe(data => {
      this.books = data
    })

  }

}
