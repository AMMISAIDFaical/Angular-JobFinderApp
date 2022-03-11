import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchCompo } from './search/app.search.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CompanyModule } from './company-list/company-form/company.module';
import { EmployerModule } from './employee-list/employee-form/employer.module';
import { SearchModule } from './search/search.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AthenGuardService } from './service/atheguard.service';
import { AthentificationService } from './service/athentification.service';
import { CompanyService } from './service/company.service';
import { SearchService } from './service/search.service';
import { EmployeeService } from './service/employer.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployerAddComponent } from './employee-list/employee-form/employer-add.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HighchartsChartModule } from 'highcharts-angular';
 @NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CompanyListComponent,
    EmployeeListComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'search', component: SearchCompo },
      { path: 'employees', component: EmployeeListComponent },
      { path: 'companies', component: CompanyListComponent },
      { path: 'employees/new', component: EmployerAddComponent },
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
    HttpClientModule,
    CompanyModule,
    EmployerModule,
    SearchModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    HighchartsChartModule
  ],

  providers: [
    AthenGuardService,
    AthentificationService,
    CompanyService,
    SearchService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
