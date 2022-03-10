import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthorMockService } from '@serv/author.mock-service';
import { AuthorService } from '@serv/author.service';

import { CreateAuthorComponent } from './create-author.component';

describe('CreateAuthorComponent', () => {
  let component: CreateAuthorComponent;
  let fixture: ComponentFixture<CreateAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
      declarations: [CreateAuthorComponent],
      providers: [
        { provide: AuthorService, useClass: AuthorMockService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAuthorComponent);
    component = fixture.componentInstance;

    component.form = component.builderForm.group({
      fullName: ['fullName', Validators.required],
      birthdate: ['birthdate', Validators.required],
      originCity: ['originCity', Validators.required],
      email: ['email', Validators.required]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validateStatusCreation con estatuscode 400 muestra "test error"', () => {
    component.validateStatusCreation({
      estatusCode: 400,
      message: 'test error',
      data: []
    })
    expect(component.messageResponse).toEqual('test error');
  });

  it('administrateAuthor crea el autor', () => {
    component.administrateAuthor({
      birthdate: new Date(),
      email: 'test@test.com',
      fullName: 'test',
      id: 1,
      originCity: 'test'
    })
    expect(component.messageResponse).toEqual('EL autor se creó exitosamente');
  });
});
