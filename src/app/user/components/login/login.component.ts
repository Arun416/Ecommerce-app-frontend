import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginForm!:FormGroup;
  constructor(private userService:UserService,
    private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      email:'',
      password:''
    })
  }

  onSubmitUser(formData: any){
    console.log(formData);
    this.userService.login(formData).subscribe(res=>{
      console.log(res);
      
    })
  }

  registerUser(){
    this.router.navigateByUrl('user/signup')
  }

}
