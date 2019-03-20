import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  loginURL = 'https://baas.kinvey.com/user/kid_HJGBR4kuE/login';

  headers = {
    'Authorization': 'Basic a2lkX0hKR0JSNGt1RTozNGE5ODVlYWRhMmQ0NjgyYjk4YzkxYjIwMDE0NmZkMg==',
    'X-Kinvey-API-Version': '3',
    'Content-Type': 'application/json'
  };

  constructor(private http: HttpClient) { }

  performLogin(username: string, password: string): Observable<any> {

    let credentials = {
      username: username,
      password: password
    };

    let response = this.http.post(
      this.loginURL,
      credentials,
      {
        headers: this.headers
      }
    );

    return response;

  }

}
