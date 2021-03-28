import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { GenericResponseModel } from '../models/genericResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44322/api/customers/getall"

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<GenericResponseModel<Customer>>{
    return this.httpClient.get<GenericResponseModel<Customer>>(this.apiUrl);
  }

}
