import { NgModule } from '@angular/core';
import { MainPageComponent } from './main_page.component';
import { MainTableModule } from '../../components/main_table/main_table.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
//import { MainPageService } from '../../services/main_page.service';
import { CommonModule } from '@angular/common';
import { appRoutes } from '../../main.router';


let imports = [
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    CommonModule,
    appRoutes,
    MainTableModule ];

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports:  imports,
  providers: [ /*MainPageService*/ ],
  bootstrap: [ MainPageComponent ]
})
export class MainPageModule {}


