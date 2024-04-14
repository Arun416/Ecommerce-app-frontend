import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,
    private tokenStorageService:TokenStorageService,
    private router:Router) { }


  createUsers(userData:any){
    return this.http.post(`${environment.apiUrl}/signUp`,userData)
  }

  login(userData:any){
    return this.http.post(`${environment.apiUrl}/login`,userData).pipe(tap((res:any)=>{
      const token = res?.token
      if(token){
        this.tokenStorageService.saveToken(token);
        this.tokenStorageService.saveUser(res);
        this.router.navigate(['user/Allproducts']);
        setTimeout(()=>  window.location.reload(),1)
      }
      }))
  }

  signOut() {
    window.sessionStorage.clear();
  }

  getLoggedIn():boolean{
    return !!this.tokenStorageService.getToken();
  }

}
