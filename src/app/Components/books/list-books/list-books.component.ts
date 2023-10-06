import {Component, OnInit} from '@angular/core';
import {BookDto, BooksService} from "../books.service";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit{

  constructor(private service: BooksService) {}
  public books: BookDto[] = [];

  ngOnInit(): void {
    this.service.List().subscribe((result: BookDto[]) => {
      this.books = result;
    });
  }

  getBase64Image(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }
}
