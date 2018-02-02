import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PipelinesComponent } from './pipelines/pipelines.component';
import { HttpClientModule } from '@angular/common/http';
import { GitlabService } from './gitlab.service';


@NgModule({
  declarations: [
    AppComponent,
    PipelinesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GitlabService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
