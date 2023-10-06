import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './Components/main-navbar/main-navbar.component';
import { BooksDashboardComponent } from './Components/books/books-dashboard/books-dashboard.component';
import { ListBooksComponent } from './Components/books/list-books/list-books.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    BooksDashboardComponent,
    ListBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
