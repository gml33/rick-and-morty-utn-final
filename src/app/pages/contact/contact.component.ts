import { Component } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup

  constructor(private fb:FormBuilder){
    this.contactForm = this.fb.group({
      name:["", [Validators.required,
        Validators.minLength(3)]],
      email:["",[Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(50)]],
      message:["", [Validators.required,
        Validators.minLength(3)]]
    })
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }

}