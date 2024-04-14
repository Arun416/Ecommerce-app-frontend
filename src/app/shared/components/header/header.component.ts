import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { SellerService } from 'src/app/core/services/seller.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCounter:number=0;
  public cartItems$:any;
  isLoggedIn = false;
  role: any;
  username!: string;
  userRole = '';
  constructor(private cartService:CartService,private router:Router,
    private tokenStorageService:TokenStorageService,
    private sellerService:SellerService) { }

  ngOnInit(): void {
  // this.isLoggedIn = !!this.tokenStorageService.getToken();
  this.getUserData();
    this.cartService.cartItems$.subscribe(x=>{
      this.cartCounter = x.length;
      this.cartItems$ = x
      
    });

  this.isLoggined()  
  /*   this.sellerService.userRole$.subscribe((role) => {
      this.userRole = role;
    }); */
   /*  if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
     
      this.role = user.data.role;

      this.username = user.data.email;
    }  */
  
  }


  isLoggined(){
    return this.sellerService.getLoggedIn();
  }

  getUserData(){
    const user = this.tokenStorageService.getUser();
    this.username = user.data.email;
    this.userRole = user.data.role;
    console.log(user);
    
  }

  logout() {
    
      this.sellerService.signOut();
      this.router.navigateByUrl('user/login');
  }

}
