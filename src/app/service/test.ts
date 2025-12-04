import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class Test {
  
  constructor(private httpService:HttpClient) {}
  public getCountriesData(): Observable<Country[]> {
    return this.httpService.get<Country[]>('https://restcountries.com/v3.1/all?fields=name,flags');
  }
}
