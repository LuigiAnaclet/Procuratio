import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  selectedFile: File | null = null;
  
  product: Product = {
    name: '',
    quantity: 0,
    price: 0,
    type:"product",
  };

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  addProduct() {
    if (this.selectedFile) {
        const formData: FormData = new FormData();
        formData.append('image', this.selectedFile, this.selectedFile.name);

        this.productService.uploadImage(formData).subscribe((response: any) => {
            this.product.picture = response.imageUrl;
            this.sendProductToServer();
        });
    } else {
        this.sendProductToServer();
    }
}

sendProductToServer() {
    this.productService.createProduct(this.product).subscribe(data => {
        console.log('Product added!', data);
    });
}

onFileSelected(event: any) {
  this.selectedFile = <File>event.target.files[0];
}  
}
