import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../service/search.service';
import { CompanyForm } from '../shared/company-form.model';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  imagSource : string = "assets/images/Abstract-background-white-12.jpg"
  Highcharts = Highcharts;
  chartOptions!: {};
  companies: CompanyForm[] = [];
  companies$!: Observable<CompanyForm>;
  //**********nombre par wilaya ***********************
  companiesFromAlger: number = 0;
  companiesFromGhardaia: number = 0;
  companiesFromStife: number = 0;
  companiesFromTizi: number = 0;
  companiesFromBejaia: number = 0;
  companiesFromOran: number = 0;
  companiesFromBiskra: number = 0;
  companiesFromAnnaba: number = 0;
  companiesFromConstantine: number = 0;
  companiesFromChlef: number = 0;
  //**********nombre par sexe femelle ***********************
  nbrFemaleAlger: number = 0;
  nbrFemaleGhardaia: number = 0;
  nbrFemaleStife: number = 0;
  nbrFemaleTizi: number = 0;
  nbrFemaleBejaia: number = 0;
  nbrFemaleOran: number = 0;
  nbrFemaleBiskra: number = 0;
  nbrFemaleChlef: number = 0;
  nbrFemaleAnnaba: number = 0;
  nbrFemaleConstantine: number = 0;
  //**********nombre par sexe male ***********************
  nbrmaleAlger: number = 0;
  nbrmaleGhardaia: number = 0;
  nbrmaleStife: number = 0;
  nbrmaleTizi: number = 0;
  nbrmaleBejaia: number = 0;
  nbrmaleOran: number = 0;
  nbrmaleBiskra: number = 0;
  nbrmaleChlef: number = 0;
  nbrmaleAnnaba: number = 0;
  nbrmaleConstantine: number = 0;
  constructor(private cs: SearchService) { }

  ngOnInit(): void {

    this.cs.getCompanies().subscribe(data => {
      {
        this.companies = data;

        this.companies.forEach((value) => {
          switch (value.wilaya) {
            case "alger":
              this.companiesFromAlger++;
              break;
            case "ghardaia":
              this.companiesFromGhardaia++;
              break;
            case "stife":
              this.companiesFromStife++;
              break;
            case "Tizi Ouzou":
              this.companiesFromTizi++;
              break;
            case "bejaia":
              this.companiesFromBejaia++;
              break;
            case "oran":
              this.companiesFromOran++;
              break;
            case "biskra":
              this.companiesFromBiskra++;
              break;
            case "chlef":
              this.companiesFromChlef++;
              break;
            case "Annaba":
              this.companiesFromAnnaba++;
              break;
            case "constantine":
              this.companiesFromConstantine++;
              break;
          }

          if (value.wilaya === "alger" && value.gender === "F")
            this.nbrFemaleAlger++;

          if (value.wilaya === "ghardaia" && value.gender === "F")
            this.nbrFemaleGhardaia++;

          if (value.wilaya === "stife" && value.gender === "F")
            this.nbrFemaleStife++;

          if (value.wilaya === "Tizi Ouzou" && value.gender === "F")
            this.nbrFemaleTizi++;

          if (value.wilaya === "bejaia" && value.gender === "F")
            this.nbrFemaleBejaia++;

          if (value.wilaya === "oran" && value.gender === "F")
            this.nbrFemaleOran++;

          if (value.wilaya === "biskra" && value.gender === "F")
            this.nbrFemaleBiskra++;

          if (value.wilaya === "chlef" && value.gender === "F")
            this.nbrFemaleChlef++;

          if (value.wilaya === "Annaba" && value.gender === "F")
            this.nbrFemaleAnnaba++;

          if (value.wilaya === "constantine" && value.gender === "F") this.nbrFemaleConstantine++;
          //***************** PAR SEXE MALE******************************************************

          if (value.wilaya === "alger" && value.gender === "M")
            this.nbrmaleAlger++;

          if (value.wilaya === "ghardaia" && value.gender === "M")
            this.nbrmaleGhardaia++;

          if (value.wilaya === "stife" && value.gender === "M")
            this.nbrmaleStife++;

          if (value.wilaya === "Tizi Ouzou" && value.gender === "M")
            this.nbrmaleTizi++;

          if (value.wilaya === "bejaia" && value.gender === "M")
            this.nbrmaleBejaia++;

          if (value.wilaya === "oran" && value.gender === "M")
            this.nbrmaleOran++;

          if (value.wilaya === "biskra" && value.gender === "M")
            this.nbrmaleBiskra++;

          if (value.wilaya === "chlef" && value.gender === "M")
            this.nbrmaleChlef++;

          if (value.wilaya === "Annaba" && value.gender === "M")
            this.nbrmaleAnnaba++;

          if (value.wilaya === "constantine" && value.gender === "M")
            this.nbrmaleConstantine++;
        });

        this.chartOptions = {

          title: {
            text: 'Stats and informations about Companies '
          },

          subtitle: {
            text: 'Stats of the Companies available by its location(wilaya) '
          },

          yAxis: {
            title: {
              text: 'Number of Companies'
            }
          },

          xAxis: {

            categories: [
              'Alger',
              'Ghardaia',
              'Oran',
              'Annaba',
              'Chlef',
              'bejaia',
              'biskra',
              'stif',
              'constantine',
              'Tizi Ouzou']
          },

          credits: {
            enabled: false
          },

          series: [
            {
              name: 'Number of the offred jobs',
              data: [
              this.companiesFromAlger,
              this.companiesFromGhardaia,
              this.companiesFromOran,
              this.companiesFromAnnaba,
              this.companiesFromChlef,
              this.companiesFromBejaia,
              this.companiesFromBiskra,
              this.companiesFromStife,
              this.companiesFromConstantine,
              this.companiesFromTizi]

            },
            {
              name: 'Number of the offred jobs for females',
              data: [
              this.nbrFemaleAlger,
              this.nbrFemaleAlger,
              this.nbrFemaleGhardaia,
              this.nbrFemaleOran,
              this.nbrFemaleAnnaba,
              this.nbrFemaleChlef,
              this.nbrFemaleBejaia,
              this.nbrFemaleBiskra,
              this.nbrFemaleStife,
              this.nbrFemaleTizi
              ]

            },
            {
              name: 'Number of the offred jobs for males',
              data: [
              this.nbrmaleAlger,
              this.nbrmaleAlger,
              this.nbrmaleGhardaia,
              this.nbrmaleOran,
              this.nbrmaleAnnaba,
              this.nbrmaleChlef,
              this.nbrmaleBejaia,
              this.nbrmaleBiskra,
              this.nbrmaleStife,
              this.nbrmaleTizi
              ]

            }

          ],

        }
        HC_exporting(Highcharts);

      }
    });
  }




}
