import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerDashboardComponent } from './components/seller-dashboard/seller-dashboard.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsListsComponent } from './components/products-lists/products-lists.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes:Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: RegisterComponent},
  {path:'dashboard', component: SellerDashboardComponent},
  {path:'create', component: CreateProductComponent},
  {path:'Myproducts', component: ProductsListsComponent},
  {path:'product/:id', component: ProductDetailsComponent},
  {path:'product/edit/:id', component: EditProductComponent},
]

@NgModule({
  declarations: [
    SellerDashboardComponent,
    CreateProductComponent,
    LoginComponent,
    RegisterComponent,
    EditProductComponent,
    ProductsListsComponent,
    ProductCardComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    RouterModule.forChild(routes),
    SharedModule

  ],
  exports: [
    RouterModule
  ]
})
export class SellerModule { }
