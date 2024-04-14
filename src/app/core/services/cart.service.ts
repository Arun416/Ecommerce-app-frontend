import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  productImage: string,
  price:any;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();
  
  constructor() { }

  get cartItems() : CartItem[] {
    return this.cartItemsSubject.value;
  }

  addCart(item: CartItem): void {
    const updatedCartItems = [...this.cartItems,item];
    this.cartItemsSubject.next(updatedCartItems);
  }

  removeItem(item: CartItem) {
    const updatedCartItems = this.cartItems.filter(i=>i.id != item.id);
    this.cartItemsSubject.next(updatedCartItems);
  }

  updateQuantity(item: CartItem, quantityUpdate: number,index:number) :void {
    const updatedCartItems = this.cartItems.map(x=> x.id == item.id? {...x,quantity:x.quantity+quantityUpdate}: x)
    this.cartItemsSubject.next(updatedCartItems);
  }

  calculateSubTotal(){
    console.log(this.cartItemsSubject.value);
    const cartItems = this.cartItemsSubject.value;
    return cartItems.reduce((total:any,item)=> total + item.quantity* item.price,0);
  }


  // Observable for grand total
  grandTotal$(subtotal:any,tax:any) {
    return subtotal + tax;
  } 
 
}
