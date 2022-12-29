import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from 'src/app/components/main/cat/cat.component';
import { HomeComponent } from 'src/app/components/main/home/home.component';
import { ParamsComponent } from 'src/app/components/main/params/params.component';
import { Page404Component } from 'src/app/components/page404/page404.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cat', component: CatComponent},
  {path: 'params', component: ParamsComponent},
  {path: 'params/:text', component: ParamsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: Page404Component}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
