import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessListWrapperComponent } from './wrapper/business-list-wrapper/business-list-wrapper.component';

const routes: Routes = [
  {
    path: 'business-list',
    component: BusinessListWrapperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessListRoutingModule { }
