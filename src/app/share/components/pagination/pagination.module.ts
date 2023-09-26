import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule, 
    NgxPaginationModule
  ],
  exports: [PaginationComponent]
})
export class PaginationModule { }
