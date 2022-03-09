import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '@env/environment';
import { AuthorService } from '@serv/author.service';
import { BookService } from '@serv/book.service';
import { EditorialService } from '@serv/editorial.service';
import { Author } from 'src/app/models/Author';
import { Book, BookResponse, Editorial } from 'src/app/models/Book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  form: FormGroup;
  authors: Author[] = [];
  editorials: Editorial[] = [];
  messageResponse = '';
  constructor(public readonly builderForm: FormBuilder,
    readonly bookService: BookService,
    readonly authorService: AuthorService,
    readonly editorialService: EditorialService) {
    this.form = this.builderForm.group({
      Title: ['', Validators.required],
      Year: ['', Validators.required],
      Genre: ['', Validators.required],
      PagesNumber: ['', Validators.required],
      EditorialID: ['', Validators.required],
      AuthorID: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getListAuthors();
    this.getListEditorials();
  }

  getListAuthors() {
    this.authorService.getAuthors().subscribe((authors) => {
      this.authors = authors.data;
    });
  }

  getListEditorials() {
    this.editorialService.getEditorials().subscribe((editorials) => {
      this.editorials = editorials.data;
    });
  }


  administrateBook(values: Book) {
    if (this.form.valid) {
      this.bookService
        .createBook(values)
        .subscribe((result) => {
          this.validateStatusCreation(result);
        }, (err) => {
          this.messageResponse = 'No se pudo crear el registro, intente mas tarde!';
          if (!environment.production) {
            console.error(err)
          }
        });
    }
  }

  validateStatusCreation(response: BookResponse) {
    if (response.estatusCode != 200) {
      this.messageResponse = response.message;
    } else {
      this.messageResponse = 'EL libro se creó exitosamente';
      this.form.reset();
    }
  }

}
