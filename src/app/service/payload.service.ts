import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayloadService {
  private REGISTERUSER_URL: string = "https://w79myskil1.execute-api.us-east-1.amazonaws.com/dev/user/reg";
  private CONFIRMUSER_URL: string = "https://w79myskil1.execute-api.us-east-1.amazonaws.com/dev/user/verify";
  private LOGINUSER_URL:string = "https://w79myskil1.execute-api.us-east-1.amazonaws.com/dev/user/login";

  constructor(private http: HttpClient) { }

  // private Authenticated: boolean = false;

  // setData(data: string) {
  //   this.sharedData = data;
  // }

  // getData(): string {
  //   return this.sharedData;
  // }
  
 
  signUp(name: any, email: any, password: any): Observable<any> {
    const user = {
      name: name,
      email: email,
      password: password
    };

    console.log("signUp-service", name, email, password);
    return this.http.post(this.REGISTERUSER_URL, user);
  }

  confirmsignUp(username: any, code: any): Observable<any> {
    const userInfo = {
      username: username,
      verifycode: code
    };

    console.log("confirmsignUp-service", userInfo);
    return this.http.post(this.CONFIRMUSER_URL, userInfo);
  }
  
  SignIn(email: any, password: any): Observable<any> {
    const userCredentials = {
      email: email,
      password: password
    };

    console.log("userCredentials-service", userCredentials);
    return this.http.post(this.LOGINUSER_URL, userCredentials);
  }


}
