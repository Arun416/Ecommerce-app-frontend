import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm!:FormGroup
  constructor(private userService:UserService,private fb:FormBuilder,
   private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ["",Validators.required],
      email: ["",Validators.required],
      password: ["",Validators.required],
    })
  }

  onCreateUser(formData:any) {
    console.log(formData);
    this.userService.createUsers(formData).subscribe(response=>{
      console.log(response);
      alert("User created")
    })
  }

  loginUser(){
    this.router.navigateByUrl('user/login')
  }

}
