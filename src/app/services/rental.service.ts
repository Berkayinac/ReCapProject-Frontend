import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponseModel } from '../models/genericResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentalDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44322/api/rentals/getall";
  DtoApiUrl="https://localhost:44322/api/rentals/getallbydto";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<GenericResponseModel<Rental>>{
   return this.httpClient.get<GenericResponseModel<Rental>>(this.apiUrl);
  }

  getRentalsByDto():Observable<GenericResponseModel<RentalDto>>{
   return this.httpClient.get<GenericResponseModel<RentalDto>>(this.DtoApiUrl);
  }
}
