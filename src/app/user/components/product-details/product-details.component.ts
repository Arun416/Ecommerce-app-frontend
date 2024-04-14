import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productInfo:any;
  constructor( private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(){
    let productId = this.route.snapshot.paramMap.get('id');
    this.productService.getSingleProduct(productId).subscribe((resp:any)=>{
    
      this.productInfo = resp.item[0];
      console.log(this.productInfo,"daat");
    })
  }

}
