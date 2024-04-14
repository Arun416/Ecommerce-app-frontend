import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  createProductFormGroup!:FormGroup;
  _categories:any
  imageSrc: any = '';
  files: File[] = [];
  url:any;

  constructor(private fb:FormBuilder,
  private tokenStorage:TokenStorageService,
  private prodService:ProductService) { }
  

  ngOnInit(): void {
    this.createProductFormGroup =  this.fb.group({
      product_Name :['',Validators.required],
      product_Description : ['',Validators.required],
      brand : ['',Validators.required],
      original_Price : ['',Validators.required],
      discount_Price : ['',Validators.required],
      seller_Id : [this.getUser().data.seller_Id,Validators.required],
      categoryId: [null,Validators.required],
      shopName: [this.getUser().data.shopName,Validators.required],
      product_image: ['',Validators.required]
    })
    this.getCategoriesList()
  }

  getCategoriesList(){
    this.prodService.fetchAllCategories().subscribe(resp=>{
      this._categories = resp;
      console.log(this._categories);
      
    })
  }

  getUser(){
   const user = this.tokenStorage.getUser();
   console.log(user);
   return user
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

  onCreateProduct(_formData: any){
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

    this.prodService.createProducts(formData).subscribe((res:any)=>{
      alert(res.message)
    })
  }

}
