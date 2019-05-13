import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormService } from '../services/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public myForm: FormGroup;

  public formErrors = {
    name: '',
    email: '',
    password: '',
  };

  constructor(
    public form: FormBuilder,
    public formService: FormService,
  ) { }

  ngOnInit() {
    this.createFrom();
  }

  login(){
    
    this.formService.markFormGroupTouched(this.myForm);

    if (this.myForm.valid) {
      this.myForm.reset();
    } else {
      this.validateForm();
    }
  }

  validateForm() {
    this.formErrors = this.formService.validateForm(this.myForm, this.formErrors, false);
  }

  public createFrom(): void{
    this.myForm = this.form.group({
      name: ['', [
          Validators.required, 
          Validators.minLength(4), 
          Validators.maxLength(50)]
        ],
      email: ['', [
        Validators.required,
        Validators.email, 
        Validators.minLength(4), 
        Validators.maxLength(50)]
      ],
      password: ['', [
        Validators.required, 
        Validators.minLength(4),
        Validators.maxLength(50)]
      ],
    });

    this.suscribeForm();
  }

  public suscribeForm(){
    this.myForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formService.validateForm(this.myForm, this.formErrors, true);
    });
  }

}
