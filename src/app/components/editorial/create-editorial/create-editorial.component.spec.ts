import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorialMockService } from '@serv/editorial.mock-service';
import { EditorialService } from '@serv/editorial.service';

import { CreateEditorialComponent } from './create-editorial.component';

describe('CreateEditorialComponent', () => {
  let component: CreateEditorialComponent;
  let fixture: ComponentFixture<CreateEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
      declarations: [CreateEditorialComponent],
      providers: [
        { provide: EditorialService, useClass: EditorialMockService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditorialComponent);
    component = fixture.componentInstance;
    component.form = component.builderForm.group({
      name: ['test', Validators.required],
      phone: ['test', Validators.required],
      correspondenceAddress: ['test', Validators.required],
      email: ['test@test.com', Validators.compose([Validators.required, Validators.email])],
      maxBooks: ['1']
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('validateStatusCreation con statuscode 400 retorna "error editorial"', () => {
    component.validateStatusCreation({
      data: [],
      estatusCode: 400,
      message: 'error editorial'
    })
    expect(component.messageResponse).toEqual('error editorial');
  });
  it('administrateEditorial retorna 1 item', () => {
    component.administrateEditorial({
      correspondenceAddress: 'test',
      email: 'test',
      id: 1,
      maxBooks: 1,
      name: 'test',
      phone: 'tesr'
    })
    expect(component.messageResponse).toEqual('La editorial se creó exitosamente');
  });
});
