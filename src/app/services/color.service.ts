import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { GenericResponseModel } from '../models/genericResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44322/api/colors/getall"

  constructor(private httpClient: HttpClient) { }

  getColors():Observable<GenericResponseModel<Color>>{
   return this.httpClient.get<GenericResponseModel<Color>>(this.apiUrl)
  }
}
