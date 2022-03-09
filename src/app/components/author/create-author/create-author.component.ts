import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '@env/environment';
import { AuthorService } from '@serv/author.service';
import { Author, AuthorResponse } from 'src/app/models/Author';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent {
  form: FormGroup;
  messageResponse = '';
  constructor(public readonly builderForm: FormBuilder,
    readonly authorService: AuthorService) {
    this.form = this.builderForm.group({
      fullName: ['', Validators.required],
      birthdate: ['', Validators.required],
      originCity: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  administrateAuthor(values: Author) {
    if (this.form.valid) {
      this.authorService
        .createAuthor(values)
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

  validateStatusCreation(response: AuthorResponse) {
    if (response.estatusCode != 200) {
      this.messageResponse = response.message;
    } else {
      this.messageResponse = 'EL autor se creó exitosamente';
      this.form.reset();
    }
  }

}
