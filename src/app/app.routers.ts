import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { AdminLoginComponent } from './admin-login/admin-login.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'
import { AddDoctorComponent } from './add-doctor/add-doctor.component'
import { AddCollectorComponent } from './add-collector/add-collector.component'
import { DoctorListComponent } from './doctor-list/doctor-list.component'
import { CollectorListComponent } from './collector-list/collector-list.component'

export const router: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent },
    {path: 'admin', component: AdminLoginComponent },
    {path: 'admin-dashboard', component: AdminDashboardComponent },
    {path: 'admin-dashboard/add-doctor', component: AddDoctorComponent },
    {path: 'admin-dashboard/add-collector', component: AddCollectorComponent },
    {path: 'admin-dashboard/doctor-list', component: DoctorListComponent },
    {path: 'admin-dashboard/collector-list', component: CollectorListComponent },
    {path: '**', component: HomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent]
