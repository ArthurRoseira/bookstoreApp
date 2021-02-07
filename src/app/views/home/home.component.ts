import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [{ 'image': "/assets/img/banner_1.jpg" },
  { 'image': "/assets/img/banner_2.png" }, { 'image': "/assets/img/banner_3.png" }]

  constructor() { }

  ngOnInit(): void {
  }

}
