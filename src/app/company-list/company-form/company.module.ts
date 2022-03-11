import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyAddComponent } from './company-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AthenGuardService } from '../../service/atheguard.service';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CompanyAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'company',canActivate:[AthenGuardService] ,component: CompanyAddComponent },
    ]),
    MatCardModule,
    MatListModule,
    MatButtonModule
  ]
})
export class CompanyModule { }
