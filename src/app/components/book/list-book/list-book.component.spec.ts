import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BookMockService } from '@serv/book.mock-service';
import { BookService } from '@serv/book.service';

import { ListBookComponent } from './list-book.component';

describe('ListBookComponent', () => {
  let component: ListBookComponent;
  let fixture: ComponentFixture<ListBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
      declarations: [ListBookComponent],
      providers: [
        { provide: BookService, useClass: BookMockService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getBookList retorna 1 item', () => {
    component.getBookList();
    expect(component.bookList.length).toEqual(1);
  });
  it('onSelectChange con tipo title setea el tipo de busqueda en "título" ', () => {
    component.onSelectChange('title');
    expect(component.searchType).toEqual('título');
  });
  it('onSelectChange con tipo year setea el tipo de busqueda en "año" ', () => {
    component.onSelectChange('year');
    expect(component.searchType).toEqual('año');
  });
  it('onSelectChange con tipo author setea el tipo de busqueda en "autor" ', () => {
    component.onSelectChange('author');
    expect(component.searchType).toEqual('autor');
  });

  it('configureSearchFilter con tipo year y valor retorna 1 item', () => {
    component.selectedSearchType = 'year';
    component.configureSearchFilter(true, '2022');
    expect(component.bookList.length).toEqual(1);
  });
  it('configureSearchFilter con tipo title y valor retorna 1 item', () => {
    component.selectedSearchType = 'title';
    component.configureSearchFilter(true, 'test');
    expect(component.bookList.length).toEqual(1);
  });
  it('configureSearchFilter con tipo author y valor retorna 1 item', () => {
    component.selectedSearchType = 'author';
    component.configureSearchFilter(true, 'nexo');
    expect(component.bookList.length).toEqual(1);
  });
});
