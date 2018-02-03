import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PipelinesComponent } from './pipelines/pipelines.component';
import { HttpClientModule } from '@angular/common/http';
import { GitlabService } from './gitlab.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    PipelinesComponent,
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
