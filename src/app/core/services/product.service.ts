import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productSubject:Observable<any> = new BehaviorSubject([])
  constructor(private http:HttpClient,private token:TokenStorageService) { }

  getToken(){
    return this.token.getToken();
  }

  getProducts() {

   /*  var headers = new Headers();

    headers.append('Authorization',`Bearer ${this.getToken()}`) */

    return this.http.get(environment.apiUrl+'/all_products');
  }

  getSingleProduct(_productId: any){
    return this.http.get(environment.apiUrl+'/product/'+_productId);
  }

  createProducts(productData: any){
    var headers = new HttpHeaders();
    headers.append('Authorization',`Bearer ${this.getToken()}`)
    return this.http.post(environment.apiUrl+'/products',productData,{headers:headers});
  }

  updateProducts(productData: any,_productId: any){
    var headers = new HttpHeaders();
    headers.append('Authorization',`Bearer ${this.getToken()}`)
    return this.http.patch(environment.apiUrl+'/product/edit/'+_productId,productData,{headers:headers});
  }


  //categories


  fetchAllCategories(){
    return this.http.get(environment.apiUrl+'/category');
  }



  //seller


  getProductsBySeller(sellerId:any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("seller_Id",sellerId);
    return this.http.get(environment.apiUrl+'/myProducts',{params:queryParams});
  }
}
