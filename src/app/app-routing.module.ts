import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './products/services.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddServiceComponent } from './add-service/add-service.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'product/add', component: AddProductComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service/add', component: AddServiceComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' } // This redirects a blank route to the /products route.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
  
}
