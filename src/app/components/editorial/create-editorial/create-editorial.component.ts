import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '@env/environment';
import { EditorialService } from '@serv/editorial.service';
import { Editorial, EditorialResponse } from 'src/app/models/Editorial';

@Component({
  selector: 'app-create-editorial',
  templateUrl: './create-editorial.component.html',
  styleUrls: ['./create-editorial.component.css']
})
export class CreateEditorialComponent {
  form: FormGroup;
  messageResponse = '';
  constructor(public readonly builderForm: FormBuilder,
    readonly editorialService: EditorialService) {
    this.form = this.builderForm.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      correspondenceAddress: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      maxBooks: ['']
    });
  }

  administrateEditorial(values: Editorial) {
    if (this.form.valid) {
      this.editorialService
        .createEditorial(values)
        .subscribe((result) => {
          this.validateStatusCreation(result);
        }, (err) => {
          this.messageResponse = 'No se pudo crear el registro, intente mas tarde!';
          if (!environment.production) {
            console.error(err)
          }
        });
    } else {
      this.messageResponse = 'valide los campos e intente de nuevo';
    }
  }

  validateStatusCreation(response: EditorialResponse) {
    if (response.estatusCode != 200) {
      this.messageResponse = response.message;
    } else {
      this.messageResponse = 'La editorial se creó exitosamente';
      this.form.reset();
    }
  }

}
