import { Component } from '@angular/core';
import { FakeStoreServiceService } from '../fake-store-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productInfo: any;
  loadProduct: boolean = false;
  id: string ='';
  
  constructor(private storeService: FakeStoreServiceService, private route: ActivatedRoute) {
    const params = this.route.snapshot.params;
    this.id = params['id'];
   }

  ngOnInit(){
    this.getProductInfo();
  }

  getProductInfo(): void{
    this.storeService.getProductById(this.id).subscribe(
      (dataProduct)=>{
        this.productInfo = dataProduct;
        this.loadProduct = true;
        console.log(dataProduct)
      }
    );
  }
}
