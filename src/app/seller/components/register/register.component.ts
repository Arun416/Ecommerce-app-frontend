import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/core/services/seller.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  sellerSignupForm!:FormGroup
  constructor(private sellerServic:SellerService,
    private fb:FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.sellerSignupForm = this.fb.group({
      username: ["",Validators.required],
      email: ["",Validators.required],
      password: ["",Validators.required],
      shopName:  ["",Validators.required],
    })
  }

  onCreateSeller(formData:any) {
    console.log(formData);
    this.sellerServic.createSupplier(formData).subscribe(resp=>{
      console.log(resp);
      alert("Success")
      this.router.navigate(['/seller-login']);
    })
  }

}
