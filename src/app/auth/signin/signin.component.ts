import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AthentificationService } from 'src/app/service/athentification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup;
  errorMessage!: string;
  employeechecked: boolean = false;
  companychecked: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private authService: AthentificationService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signInForm.get('email')?.value;
    const password = this.signInForm.get('password')?.value;

    this.authService.signInUser(email, password).then(
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
