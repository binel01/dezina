import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public bestSellerProducts = [];

  constructor(public navCtrl: NavController, private productService: ProductServiceProvider) {
  	console.log("Best Seller page constructed !");
  }

  ionViewDidLoad() {
  	console.log("About Page loaded !!")
  	this.productService.getProducts()
  		.subscribe((allProducts) => {
  			this.bestSellerProducts = allProducts.filter(product => product.bestSeller == true);
  			console.log(this.bestSellerProducts);
  		});
  }

}
