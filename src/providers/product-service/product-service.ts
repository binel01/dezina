import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";


/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductServiceProvider Provider');
  }

  getProducts() {
  	return this.http.get('/assets/data.json')
  		.map(response => response);
  }

}
