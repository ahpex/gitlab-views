import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PipelinesComponent } from './pipelines/pipelines.component';
import { MergerequestsComponent } from './mergerequests/mergerequests.component';
import { HttpClientModule } from '@angular/common/http';
import { GitlabService } from './gitlab.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient } from '@angular/common/http/src/client';

@NgModule({
  declarations: [
    AppComponent,
    PipelinesComponent,
    MergerequestsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GitlabService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
