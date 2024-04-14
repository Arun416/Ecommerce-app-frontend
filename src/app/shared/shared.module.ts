import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AsyncPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent, 
    HomeComponent
  ]
})
export class SharedModule { }
