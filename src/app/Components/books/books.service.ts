import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'https://localhost:44308/api/books';

  constructor(private http: HttpClient) {
  }

  public List(): Observable<BookDto[]> {
    return this.http.get<BookDto[]>(this.apiUrl);
  }

  public Create(book: BookDto): Observable<BookDto> {
    const formData = new FormData();
    formData.append('Cover', book.cover);
    formData.append('Title', book.title);
    formData.append('Author', book.author);

    return this.http.post<BookDto>(this.apiUrl, formData);
  }

  public Update(id: number, book: BookDto): Observable<BookDto> {
    const formData = new FormData();
    if (book.cover)
      formData.append('Cover', book.cover);
    if (book.title)
      formData.append('Title', book.title);
    if (book.author)
      formData.append('Author', book.author);

    return this.http.put<BookDto>(this.apiUrl, {
      id: id,
      book: formData
    })
  }
}

export interface BookDto {
  cover: string,
  title: string,
  author: string
}
