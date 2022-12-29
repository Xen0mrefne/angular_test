import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/header/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
