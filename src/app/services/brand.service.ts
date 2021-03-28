import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { GenericResponseModel } from '../models/genericResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44322/api/brands/getall";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<GenericResponseModel<Brand>>{
   return this.httpClient.get<GenericResponseModel<Brand>>(this.apiUrl);
  }

}
