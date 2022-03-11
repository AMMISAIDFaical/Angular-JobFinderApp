import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCompo } from './app.search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
 


@NgModule({
  declarations: [
    SearchCompo
  ],
  imports: [
     CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'search', component: SearchCompo },
    ]),
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,

  ]

})
export class SearchModule { }
