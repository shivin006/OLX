import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component'
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      {
        path: "home",
        component: DashboardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
