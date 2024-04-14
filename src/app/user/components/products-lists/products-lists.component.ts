import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.scss']
})
export class ProductsListsComponent implements OnInit {
  _productLists: any;
 /*  _productLists:any = [
    {
      id:1,
      product_Name:'Men Shirt1',
      product_description:'men cotton shirts',
      brand:'Otto',
      category:'',
      price:500,
      discount_price: 350,
      product_Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVvupcNbxQG7el8ULHca7qTHgdps5JrhR-A&usqp=CAU",
      in_Stock:true,
    },
    {
      id:2,
      product_Name:'Men Shirt2',
      product_description:'men cotton shirts',
      brand:'Otto',
      category:'',
      price:700,
      discount_price: 450,
      product_Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVvupcNbxQG7el8ULHca7qTHgdps5JrhR-A&usqp=CAU",
      in_Stock:true,
    },
    {
      id:3,
      product_Name:'Men Shirt3',
      product_description:'men cotton shirts',
      brand:'Otto',
      category:'',
      price:700,
      discount_price: 450,
      product_Image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
      in_Stock:true,
    },
    {
      id:4,
      product_Name:'Men Shirt4',
      product_description:'men cotton shirts',
      brand:'Otto',
      category:'',
      price:700,
      discount_price: 450,
      product_Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVvupcNbxQG7el8ULHca7qTHgdps5JrhR-A&usqp=CAU",
      in_Stock:true,
    },
    {
      id:5,
      product_Name:'Men Shirt5',
      product_description:'men cotton shirts',
      brand:'Otto',
      category:'',
      price:700,
      discount_price: 450,
      product_Image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
      in_Stock:true,
    },
    {
      id:6,
      product_Name:'Men Shirt6',
      product_description:'men cotton shirts',
      brand:'Otto',
      category:'',
      price:700,
      discount_price: 450,
      product_Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVvupcNbxQG7el8ULHca7qTHgdps5JrhR-A&usqp=CAU",
      in_Stock:true,
    },
    {
      id:7,
      product_Name:'Men Shirt7',
      product_description:'men cotton shirts',
      brand:'Otto',
      category:'',
      price:700,
      discount_price: 450,
      product_Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVvupcNbxQG7el8ULHca7qTHgdps5JrhR-A&usqp=CAU",
      in_Stock:true,
    },
    {
      id:8,
      product_Name:'Men Shirt',
      product_description:'men cotton shirts',
      brand:'Otto',
      category:'',
      price:700,
      discount_price: 450,
      product_Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVvupcNbxQG7el8ULHca7qTHgdps5JrhR-A&usqp=CAU",
      in_Stock:true,
    },
    {
      id:9,
      product_Name:'Men Shirt',
      product_description:'men cotton shirts',
      brand:'Otto',
      category:'',
      price:700,
      discount_price: 450,
      product_Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVvupcNbxQG7el8ULHca7qTHgdps5JrhR-A&usqp=CAU",
      in_Stock:false,
    }
  ] */

  constructor(private productServ:ProductService) { }

  ngOnInit(): void {
    this.productServ.getProducts().subscribe((resp:any)=>{
      console.log(resp.products[0])
      this._productLists = resp.products[0]
    })
  }

}
