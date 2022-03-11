import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../service/search.service';
import { CompanyForm } from '../shared/company-form.model';


@Component({
  selector: 'search',
  templateUrl: './app.search.component.html',
  styleUrls: ['./app.component.css']

})
export class SearchCompo implements OnInit {
  myimage :  string = "assets/images/group-people-different-professions-vector.jpg";
  imagSource : string = "assets/images/Abstract-background-white-12.jpg"
  companies: CompanyForm[] = [];
  filtredCompanies: CompanyForm[] = [];
  show: boolean=true;
  companies$!: Observable<CompanyForm>

  job: string = "";
  wilaya: string = "";

  constructor(private cs: SearchService) {}



  ngOnInit(): void {
    this.cs.getCompanies().subscribe(data => this.companies = data);
  }


  onSearch() {
    this.show = false;
    this.cs.getFiltredCompanies(this.job, this.wilaya).valueChanges().subscribe(data => this.filtredCompanies = data);


  }




}





