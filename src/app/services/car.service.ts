import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { GenericResponseModel } from '../models/genericResponseModel';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';

@Injectable({
  providedIn: 'root'
})
export class CarService {

 getAll = "https://localhost:44322/api/cars/getall";
 getCarsByDto = "https://localhost:44322/api/cars/getcarsbydto";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<GenericResponseModel<Car>>
  {
    return this.httpClient.get<GenericResponseModel<Car>>(this.getAll)
  }

  getDtoCars():Observable<GenericResponseModel<CarDto>>{
    return this.httpClient.get<GenericResponseModel<CarDto>>(this.getCarsByDto)
  }

}
