import { SupportComponent } from './views/support/support.component';
import { BooksComponent } from './views/books/books.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: "home",
    children: [
      { path: '', component: HomeComponent }]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'books',
    children: [
      { path: '', component: BooksComponent }]
  },
  {
    path: 'support',
    children: [
      { path: '', component: SupportComponent }]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
