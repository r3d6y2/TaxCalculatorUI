import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaxCalculationResult } from '../models/tax-calculation-result';

const baseUrl = 'http://localhost:5182/Tax';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor(private http: HttpClient) { }
  
  calculate(incoming: any): Observable<TaxCalculationResult> {
      return this.http.post<TaxCalculationResult>(baseUrl, incoming);
  }
}
