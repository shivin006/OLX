import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


import { IndexComponent } from './index.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  declarations: [
    NavbarComponent, 
    FooterComponent, 
    IndexComponent, DashboardComponent
  ],
  exports: [
    NavbarComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]

})
export class IndexModule { }
