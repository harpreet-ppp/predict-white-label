import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessListWrapperComponent } from './wrapper/business-list-wrapper/business-list-wrapper.component';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { BusinessListRoutingModule } from './business-list-routing.module';



@NgModule({
  declarations: [
    BusinessListWrapperComponent,
    BusinessListComponent
  ],
  imports: [
    CommonModule,
    BusinessListRoutingModule
  ]
})
export class BusinessListModule { }
