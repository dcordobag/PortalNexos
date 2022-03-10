import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorMockService } from '@serv/author.mock-service';
import { AuthorService } from '@serv/author.service';

import { ListAuthorComponent } from './list-author.component';

describe('ListAuthorComponent', () => {
  let component: ListAuthorComponent;
  let fixture: ComponentFixture<ListAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
      declarations: [ListAuthorComponent],
      providers: [
        { provide: AuthorService, useClass: AuthorMockService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAuthorsList retorna 1 elemento', () => {
    component.getAuthorsList();
    expect(component.authorsList.length).toEqual(1);
  });

});
