import { BookServiceService } from './../../services/book-service.service';
import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  books: any = []

  slides = [{ 'image': "/assets/img/banner_1.jpg" },
  { 'image': "/assets/img/banner_2.png" }, { 'image': "/assets/img/banner_3.png" }]

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookService.readAllBooks().subscribe(data => {
      this.books = data
      this.books = this.books.slice(0, 3)
    })

  }

}

