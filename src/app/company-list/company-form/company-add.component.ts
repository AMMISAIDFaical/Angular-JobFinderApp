import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { CompanyForm } from 'src/app/shared/company-form.model';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {
  imagSource : string = "assets/images/Abstract-background-white-12.jpg"
  companyForm!: FormGroup;
  comp: CompanyForm[] = [];

  constructor(private formBuilder: FormBuilder, private companiesService: CompanyService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.companyForm = this.formBuilder.group({
      companyAdr: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      wilaya: ['', Validators.required],
      city: ['', Validators.required],
      companyName: ['', Validators.required],
      companyMail: ['', Validators.required],
      Offredjob: ['', Validators.required],
      gender: ['', Validators.required]

    });
  }
  onSaveCompany(): void {
    const companyAdr = this.companyForm.get('companyAdr')?.value;
    const phoneNumber = this.companyForm.get('phoneNumber')?.value;
    const wilaya = this.companyForm.get('wilaya')?.value;
    const city = this.companyForm.get('city')?.value;
    const companyName = this.companyForm.get('companyName')?.value;
    const companyMail = this.companyForm.get('companyName')?.value;
    const Offredjob = this.companyForm.get('Offredjob')?.value;
    const gender = this.companyForm.get('gender')?.value;

    var company = new CompanyForm;

    company.companyName = companyName;
    company.phoneNumber = phoneNumber;
    company.companyAdr = companyAdr;
    company.companyMail = companyMail;
    company.wilaya = wilaya;
    company.city = city;
    company.Offredjob = Offredjob;
    company.Offredjob = gender;


    this.companiesService.createNewCompany(company);

  }
  gotoEmployees() {
    this.router.navigateByUrl('/employees');
  }
  onDeleteCompany() {
    //this.companiesService.deleteEmployee(id);
  }

}
