import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/core/services/seller.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sellerLogin!:FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  token!:string;
  constructor(private sellerService:SellerService,
    private fb:FormBuilder,
    private tokenStorageService: TokenStorageService,
    private router:Router) { }

  ngOnInit(): void {
    this.sellerLogin = this.fb.group({
      email: ["",Validators.required],
      password: ["",Validators.required],
    })
  }


  SellerLogin(_formData: any){
    this.sellerService.supplierLogin(_formData).subscribe((res:any)=>{
      this.isLoggedIn = true;
      this.isLoginFailed = false;
    }
   /*  err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    } */
    )
  }


  reloadPage() {
    window.location.reload();
  }
}
