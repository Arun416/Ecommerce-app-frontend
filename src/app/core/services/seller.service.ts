import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private loggedIn = new BehaviorSubject<any>(false);
  private userRole = new BehaviorSubject<string>(''); // Default: empty role

  // Expose observables
  isLoggedIn$ = this.loggedIn.asObservable();
  userRole$ = this.userRole.asObservable();
  constructor(private http:HttpClient,private tokenStorageService:TokenStorageService,
    private router:Router) {}

  createSupplier(userData:any){
    return this.http.post(`${environment.apiUrl}/seller-signup`,userData)
  }

  supplierLogin(userData:any){
    this.loggedIn.next(true);
    this.userRole.next('Seller');
    return this.http.post(`${environment.apiUrl}/seller-login`,userData).pipe(tap((res:any)=>{
      const token = res?.token
      if(token){
        this.tokenStorageService.saveToken(token);
        this.tokenStorageService.saveUser(res);
        this.router.navigate(['seller/Myproducts']);
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
