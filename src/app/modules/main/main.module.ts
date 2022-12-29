import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from '../../components/main/main.component';
import { HomeComponent } from '../../components/main/home/home.component';
import { CatService } from '../../components/main/cat.service';
import { CatComponent } from '../../components/main/cat/cat.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ParamsComponent } from 'src/app/components/main/params/params.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    CatComponent,
    ParamsComponent
  ],
  providers: [
    CatService
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
