import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private _route: Router, private service: AdminService) {
    if (!this.service.adminAuthentication()) {
      this._route.navigate(['home']);
}
  }

  ngOnInit() {
  }

}
