import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  _productBrief:any
  constructor( private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.getProductDetails()
  }

  getProductDetails(){
    let productId = this.route.snapshot.paramMap.get('id');
    this.productService.getSingleProduct(productId).subscribe({
      next:(response:any)=>{
        console.log(response.item[0]);
        this._productBrief = response.item[0]
      }
    })
  }
}
