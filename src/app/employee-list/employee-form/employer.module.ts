import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerAddComponent } from './employer-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { AthenGuardService } from '../../service/atheguard.service';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    EmployerAddComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'employer', canActivate:[AthenGuardService] , component: EmployerAddComponent },
    ]),
    MatDialogModule,
    MatButtonModule,
    MatGridListModule

  ]
})
export class EmployerModule { }
