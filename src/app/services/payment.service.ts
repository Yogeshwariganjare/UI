import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  [x: string]: any;
  
  BaseUrl!: "http://localhost:8085";

  constructor(private http:HttpClient) { }
  
  makepayment(){
    return this.http.get(`${this.BaseUrl}`)
  }
  
}
