import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PipelinesComponent } from './pipelines/pipelines.component';
import { MergerequestsComponent } from './mergerequests/mergerequests.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'pipelines', component: PipelinesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mergerequests', component: MergerequestsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
