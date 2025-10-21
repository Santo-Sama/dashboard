import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule , MatButtonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

    onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    // chiamare authservice
  }
}
