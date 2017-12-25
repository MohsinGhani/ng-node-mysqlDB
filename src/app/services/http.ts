import { Injectable, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { RequestOptions, Headers } from '@angular/http';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

type customServerResponseObject = { 'statusCode': boolean | number, 'statusDesc': any };
const headers = new Headers({ "Content-Type": "application/json" });
@Injectable()

export class HttpService implements OnDestroy {

  subscription: ISubscription;
  url: string = 'http://localhost:3000/api';

  constructor(public http: Http) {
  }

  getAllReports() {
    return this.http.get(`${this.url}/getAllReports`,{ headers }).map(res =>{
        return res.json()
    });
  }

  getReport(id:any) {
    return this.http.get(`${this.url}/getReport/${id}`,{ headers }).map(res =>{
        return res.json()
    });
  }

  post(data: Object, funcName: String): Observable<any> {
    return this.http.post(`http://localhost:3000/api/${funcName}/`, data,{ headers })
    .map(res => res.json())
    .catch(err => err);
  }

  ngOnDestroy() {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

}