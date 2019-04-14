import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes }   from '@angular/router';
import { routing } from './app-routing.module';
import {ContactDetailsService} from './_service/contact-details.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactDetailComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [ContactDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
