import { Injectable } from '@angular/core';
import { Product } from './model/Product'
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  performGetProducts(sessionToken: string): Observable<any> {

    var headers = {
      'Authorization': 'Kinvey ' + sessionToken,
      'X-Kinvey-API-Version': '3'
    };

    let url = 'https://baas.kinvey.com/appdata/kid_HJGBR4kuE/productos';

    let response = this.http.get(
      url,
      {
        headers: headers
      }
    );

    return response;

  }

  performGetProductById(sessionToken: string, productId: string): Observable<any> {

    var headers = {
      'Authorization': 'Kinvey ' + sessionToken,
      'X-Kinvey-API-Version': '3'
    };

    let url = 'https://baas.kinvey.com/appdata/kid_HJGBR4kuE/productos/' + productId;

    let response = this.http.get(
      url,
      {
        headers: headers
      }
    );

    return response;

  }

  performPutProduct(sessionToken: string, product: Product): Observable<any> {

    var headers = {
      'Authorization': 'Basic a2lkX0hKR0JSNGt1RTozNGE5ODVlYWRhMmQ0NjgyYjk4YzkxYjIwMDE0NmZkMg==',
      'X-Kinvey-API-Version': '3',
      'Content-Type' : 'application/json'
    };

    let url = 'https://baas.kinvey.com/appdata/kid_HJGBR4kuE/productos/' + product.id;

    let response = this.http.put(
      url,
      JSON.stringify(product),
      {
        headers: headers
      }
    );

    return response;

  }

}
