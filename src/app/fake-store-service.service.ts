import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreServiceService {
  private fakeApi = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get<any>(this.fakeApi+'products');
  }

  getPruductsLimit(): Observable<any>{
    return this.http.get<any>(this.fakeApi+'products?limit=5')
  }

  getProductById(id:string): Observable<any>{
    return this.http.get<any>(this.fakeApi+'products/'+id)
  }
}
