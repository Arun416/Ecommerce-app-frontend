import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem,CartService } from 'src/app/core/services/cart.service';
import { SellerService } from 'src/app/core/services/seller.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product:any;
  role!:string;

  constructor(private cartService:CartService,
              private router:Router,
              private sellerService:SellerService,
              private token: TokenStorageService
             ) { }

  ngOnInit(): void { this.getUserData()
  }

  onAddProducttoCart(product:any){
    const cartItem: CartItem = {
      id: product.id,
      name: product.product_Name,
      quantity: 1,
      productImage: product.product_Image,
      price: product.discount_price
    };
    
    this.cartService.addCart(cartItem);
    alert("Added to Cart")
  }

  onUpdateProduct(product_Id:number){
    this.router.navigate(['seller/product/edit/'+product_Id]);
  }

  onViewProduct(product_Id:number){
    this.router.navigate(['seller/product/'+product_Id]);
  }

  isLoggined(){
    return this.sellerService.getLoggedIn();
  }

  getUserData(){
    const user = this.token.getUser();
    this.role = user.data.role;
  }

}
