import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [{path:"", redirectTo:"login",pathMatch:"full"},
{path:"login",component:LoginComponent},
{path:"contactus",component:ContactusComponent},
{path:"aboutus",component:AboutusComponent},
{path:"home",component:HomeComponent,
  children:[
    {path:"products", component:ProductsComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
