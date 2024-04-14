import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  editProductFormGroup!:FormGroup;
  imageSrc: any = '';
  url:any;
  files: File[] = [];
  _categories:any;
  _productDetail:any;
  _productId:any;

  constructor(private fb:FormBuilder,
  private route:ActivatedRoute,
  private tokenStorage:TokenStorageService,
  private productService:ProductService) { }

  ngOnInit(): void {
    this._productId = this.route.snapshot.paramMap.get('id');
    this.editProductFormGroup =  this.fb.group({
      product_Name :['',Validators.required],
      product_Description : ['',Validators.required],
      brand : ['',Validators.required],
      original_Price : ['',Validators.required],
      discount_Price : ['',Validators.required],
      seller_Id : ['',Validators.required],
      categoryId: [null,Validators.required],
      shopName: ['',Validators.required],
      product_image: ['',Validators.required]
    })
   this.getCategoriesList();
   this.getSelectedProduct()
  }

  getSelectedProduct(){
   
    this.productService.getSingleProduct(this._productId).subscribe({
      next:(response:any)=>{
        console.log(response.item[0]);
        this._productDetail = response.item[0]

        this.editProductFormGroup.setValue({
          product_Name :[this._productDetail[0].product_Name],
          product_Description : [this._productDetail[0].product_Description],
          brand : [this._productDetail[0].brand],
          original_Price : [this._productDetail[0].original_Price],
          discount_Price : [this._productDetail[0].discount_Price],
          seller_Id : [this._productDetail[0].seller_Id],
          categoryId: [this._productDetail[0].categoryId],
          shopName: [this._productDetail[0].shopName],
          product_image: [this._productDetail[0].product_image]
        })
      }
    })
  }

  getCategoriesList(){
    this.productService.fetchAllCategories().subscribe(resp=>{
      this._categories = resp;
      console.log(this._categories);
    })
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        this.url = event.target.files[0]
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
    }
  }

	onSelect(event: any ) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event:any) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  onEditProduct(_formData:any){
    console.log(_formData);
    const formData = new FormData();
    formData.append('product_Name',_formData.product_Name);
    formData.append('product_Description',_formData.product_Description);
    formData.append('brand',_formData.brand);

    formData.append('original_Price',_formData.original_Price);
    formData.append('discount_Price',_formData.discount_Price);
    formData.append('seller_Id',_formData.seller_Id);
    formData.append('categoryId',_formData.categoryId);
    formData.append('shopName',_formData.shopName);
    formData.append('product_image',this.url);
    this.productService.updateProducts(formData,this._productId).subscribe(resp=>{
      console.log(resp)
    })
  }

}
