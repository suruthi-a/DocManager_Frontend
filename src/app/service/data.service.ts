import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

   private isAuthenticated: boolean = false;
   private isLogged = new BehaviorSubject(false);

  putAuthentication(value: boolean) {
    this.isAuthenticated = value;
  }

  getAuthentication(): boolean {
    return this.isAuthenticated;
  }

  Authenticated(){
    this.isLogged.next(true);
  }
  
}
