import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthorMockService } from '@serv/author.mock-service';
import { AuthorService } from '@serv/author.service';
import { BookMockService } from '@serv/book.mock-service';
import { BookService } from '@serv/book.service';
import { EditorialMockService } from '@serv/editorial.mock-service';
import { EditorialService } from '@serv/editorial.service';

import { CreateBookComponent } from './create-book.component';

describe('CreateBookComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
      declarations: [CreateBookComponent],
      providers: [
        { provide: BookService, useClass: BookMockService },
        { provide: AuthorService, useClass: AuthorMockService },
        { provide: EditorialService, useClass: EditorialMockService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    component.form = component.builderForm.group({
      Title: ['test', Validators.required],
      Year: ['2022', Validators.required],
      Genre: ['test', Validators.required],
      PagesNumber: ['1', Validators.required],
      EditorialID: ['1', Validators.required],
      AuthorID: ['1', Validators.required]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getListAuthors retorna 1 elemento', () => {
    component.getListAuthors();
    expect(component.authors.length).toEqual(1);
  });
  it('getListEditorials retorna 1 elemento', () => {
    component.getListEditorials();
    expect(component.editorials.length).toEqual(1);
  });
  it('administrateBook crea el libro', () => {
    component.administrateBook({
      authorID: 1,
      editorialID: 1,
      genre: 'test',
      pagesNumber: 1,
      title: 'test',
      year: '2022',
    });
    expect(component.messageResponse).toEqual('EL libro se creó exitosamente');
  });
  it('validateStatusCreation con statudcode 400 retorna "error"', () => {
    component.validateStatusCreation({
      data: [],
      estatusCode: 400,
      message: 'error'
    });
    expect(component.messageResponse).toEqual('error');
  });
});
