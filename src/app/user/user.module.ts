import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { ProductsListsComponent } from './components/products-lists/products-lists.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes:Routes = [
  { 
    path:'', redirectTo:'login',pathMatch:'full'
  },
  { 
    path:'login', component: LoginComponent
  },
  { 
    path:'signup', component: RegisterComponent
  },
  { 
    path:'Allproducts', component: ProductsListsComponent
  },
  {
    path:'Allproducts/:id', component: ProductDetailsComponent
  },
  {
    path:'cart', component: CartComponent
  },
]

@NgModule({
  declarations: [
    UserDashboardComponent,
    LoginComponent,
    RegisterComponent,
    ProductsListsComponent,
    ProductCardComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
