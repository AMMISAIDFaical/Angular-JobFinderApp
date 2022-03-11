import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeCv } from '../shared/employee-cv.model';
import { EmployeeService } from '../service/employer.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  imagSource : string = "assets/images/Abstract-background-white-12.jpg"
  employees$!: Observable<EmployeeCv[]>;
  employees: EmployeeCv[] = [];
  empMale: number = 0;
  empFemale: number = 0;
  chartOptions!: {};
  Highcharts = Highcharts;
  percEmpMale: number = 0;
  percEmpFemale: number = 0;
  empUnder30: number = 0;
  empPlus30: number = 0;

  constructor(private es: EmployeeService) { }

  ngOnInit(): void {

    this.es.getEmployees().subscribe(data => {
      {
        this.employees = data;

        this.employees.forEach((value) => {
          if (value.gener === "M") {
            this.empMale++;
          } else if (value.gener === "F") {
            this.empFemale++;
          }

          if (parseInt(value.age) < 30) {
            this.empUnder30++;
          } else if (parseInt(value.age) > 30) {
            this.empPlus30++;
          }

        });



        this.chartOptions = {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
            text: 'stats about employees'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          accessibility: {
            point: {
              valueSuffix: '%'
            }
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
            }
          },
          series: [{
            name: 'gender/age stats',
            colorByPoint: true,
            data: [{
              name: 'female',
              y: this.empFemale,
              sliced: true,
              selected: true
            }, {
              name: 'male',
              y: this.empMale
            }, {
              name: 'employees plus 30 years old',
              y: this.empPlus30
            }, {
              name: 'employees under 30 years old',
              y: this.empUnder30
            },
            ]
          }]
        }
        HC_exporting(Highcharts);


      }


    }












    );







  }




}
