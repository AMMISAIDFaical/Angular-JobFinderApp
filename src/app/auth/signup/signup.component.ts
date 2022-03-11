import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AthentificationService } from 'src/app/service/athentification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;
  errorMessage!: string;
  employeechecked: boolean = false;
  companychecked: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private authService: AthentificationService,
    private router: Router, private elementRef: ElementRef) { }

  ngOnInit() {
    this.initForm();
  }
 
  initForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;

    this.authService.createNewUser(email, password).then(
      () => {
        if (this.employeechecked)
          this.router.navigate(['/employer']);
        else if (this.companychecked)
          this.router.navigate(['/company']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  checkValueemployee() {
    this.employeechecked = true;
  }
  checkValuecompany() {
    this.companychecked = true;
  }
}
