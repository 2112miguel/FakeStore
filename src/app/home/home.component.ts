import { Component } from '@angular/core';
import { FakeStoreServiceService } from '../fake-store-service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  fakeProducts: any[] = [];
  loadProducts: boolean = false;

  constructor(private fakeStore: FakeStoreServiceService) { }

  ngOnInit(): void{
    this.getProducts();
  }

  getProducts(): void{
    this.fakeStore.getPruductsLimit().subscribe(
      (productData)=>{        
        this.fakeProducts = productData;
        this.loadProducts = true;
        console.log(productData)
      }
    );
  }

}
