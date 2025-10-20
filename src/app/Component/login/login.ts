import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,   // importante se usi Angular 17+ standalone
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule , MatButtonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    // chiamare authservice
  }
}
