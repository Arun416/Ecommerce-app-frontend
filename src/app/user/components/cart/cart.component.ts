import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems$ =this.cartService.cartItems$;;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  
  }

  onChangeQuantity(event:any,i:number){
    let item = event.target.value;
  }

  public removeItem(item: CartItem): void {
    this.cartService.removeItem(item);
  }

  public onIncreaseQuantity(item:CartItem,index:number) {
    this.cartService.updateQuantity(item,1,index)
  }

  public onDecreaseQuantity(item:CartItem,index:number) {
    this.cartService.updateQuantity(item,-1,index)
  }

  public calculateItemTotal(item: CartItem): number {
    return item.quantity * item.price;
  }

  calculateSubTotalPrice(){
    return this.cartService.calculateSubTotal();
  }

  private taxes:number = 5
  calculateTaxes(){
    return this.taxes;
  }

  calculateGrandTotal(){
    return this.cartService.grandTotal$(this.calculateSubTotalPrice(),this.calculateTaxes())
  }

 


}
