import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem,CartService } from 'src/app/core/services/cart.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product:any;
  role!:String;
  constructor(private cartService:CartService,
              private router:Router,
              private userService:UserService,
              private token:TokenStorageService
             ) { }

  ngOnInit(): void {
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

  onViewProduct(product_Id:number){
    console.log(product_Id,"id");
    
    this.router.navigate(['user/Allproducts/'+product_Id]);
  }

  isLoggined(){
    return this.userService.getLoggedIn();
  }

  getUserData(){
    const user = this.token.getUser();
    this.role = user.data.role;
  }


}
