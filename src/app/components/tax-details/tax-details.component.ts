import { Component } from '@angular/core';
import { TaxService } from 'src/app/services/tax.service';
import { TaxCalculationResult } from 'src/app/models/tax-calculation-result';

@Component({
  selector: 'app-tax-details',
  templateUrl: './tax-details.component.html',
  styleUrls: ['./tax-details.component.scss']
})
export class TaxDetailsComponent {
  incomingSalary: number = 0;
  isResultShown: boolean = false;
  calculationResult: TaxCalculationResult = {
    grossAnnualSalary: 0,
    grossMonthlySalary: 0,
    netAnnualSalary: 0,
    netMonthlySalary: 0,
    annualTax: 0,
    monthlyTax: 0
  }

  constructor(private taxService: TaxService) 
  { }

  calculateTaxes(): void {
    console.log('test');
    const data = {
      incomingSalary: this.incomingSalary
    }
    this.taxService.calculate(data).subscribe({
      next: (res) => {
        console.log(res);
        this.calculationResult = res;
        this.isResultShown = true;
      },
      error: (e) => {
        console.error(e)
        this.isResultShown = false;
      } 
    });
  }
}
