import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { ProductDetailPage } from '../../pages/product-detail/product-detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public allProducts:Object;

  constructor(public navCtrl: NavController, private productService: ProductServiceProvider) {

  }

  ionViewDidLoad() {
  	this.productService.getProducts()
  		.subscribe(response => {
  			this.allProducts = response;
  		});
  }

  goToProductDetailPage(product) {
    this.navCtrl.push(ProductDetailPage, {
      productDetails: product
    });
  }

}
