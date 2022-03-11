import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeCv } from '../../shared/employee-cv.model';
import { EmployeeService } from '../../service/employer.service';

@Component({
  templateUrl: './employer-add.component.html',
})
export class EmployerAddComponent implements OnInit {
  imagSource : string = "assets/images/Abstract-background-white-12.jpg"
  employeeForm!: FormGroup;
  emp: EmployeeCv[] = [];


  constructor(private formBuilder: FormBuilder, private employeessService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    console.log(this.employeessService.getEmployees());

  }


  initForm() {
    this.employeeForm = this.formBuilder.group({
      email: ['', Validators.required],
      fullName: ['', Validators.required],
      gener: ['', Validators.required],
      adress: ['', Validators.required],
      wilaya: ['', Validators.required],
      city: ['', Validators.required],
      job: ['', Validators.required],
      age: ['', Validators.required],
      degree: ['', Validators.required],
      phone: ['', Validators.required],
      school: ['', Validators.required],
      expWilaya: ['', Validators.required],
      expCity: ['', Validators.required],
      expCompany: ['', Validators.required],
    });
  }

  onSaveEmployeeCV() {
    const email = this.employeeForm.get('email')?.value;
    const fullName = this.employeeForm.get('fullName')?.value;
    const gener = this.employeeForm.get('gener')?.value;
    const adress = this.employeeForm.get('adress')?.value;
    const wilaya = this.employeeForm.get('wilaya')?.value;
    const city = this.employeeForm.get('city')?.value;
    const job = this.employeeForm.get('job')?.value;
    const age = this.employeeForm.get('age')?.value;
    const degree = this.employeeForm.get('degree')?.value;
    const phone = this.employeeForm.get('phone')?.value;
    const school = this.employeeForm.get('school')?.value;
    const expWilaya = this.employeeForm.get('expWilaya')?.value;
    const expCity = this.employeeForm.get('expCity')?.value;
    const expCompany = this.employeeForm.get('expCompany')?.value;

    var employee = new EmployeeCv;

    employee.Email =email;
    employee.FullName = fullName;
    employee.gener = gener;
    employee.adress = adress;
    employee.wilaya = wilaya;
    employee.city = city;
    employee.job = job;
    employee.age = age;
    employee.degree = degree;
    employee.phoneNumber = phone;
    employee.school = school;
    employee.companyName = expCompany;

    this.employeessService.createNewEmployee(employee);

  }

  gotoCompanies()
  {
    this.router.navigateByUrl('/companies');

  }
  onDeleteCV()
  {
     //this.employeessService.deleteEmployee(id);
  }

  }






