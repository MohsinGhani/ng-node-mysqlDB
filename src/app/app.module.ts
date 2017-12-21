import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app.routers';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GeneralNavComponent } from './general-nav/general-nav.component';
import { DoctorNavComponent } from './doctor-nav/doctor-nav.component';
import { CollectorNavComponent } from './collector-nav/collector-nav.component';
import { LoginComponent } from './login/login.component';
import { CollectorDashboardComponent } from './collector-dashboard/collector-dashboard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { HttpService } from './services/http'


@NgModule({
  declarations: [
    AppComponent,
    GeneralNavComponent,
    DoctorNavComponent,
    CollectorNavComponent,
    LoginComponent,
    CollectorDashboardComponent,
    DoctorDashboardComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
