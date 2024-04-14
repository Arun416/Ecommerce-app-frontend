import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
 /*  {
    path: '',
    component: MainLayoutComponent,
  }, */
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then((m) => m.SellerModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
