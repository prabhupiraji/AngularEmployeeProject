import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CreateEmployeePersonalDetailsComponent } from './create-employee-personal-details/create-employee-personal-details.component';

// import { CreateEmployeePersonalDetails } from './create-employee-personal-details/create-employee-personal-details.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeePersonalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
