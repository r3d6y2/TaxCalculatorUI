import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxDetailsComponent } from './components/tax-details/tax-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'tax-details', pathMatch: 'full' },
  { path: 'tax-details', component: TaxDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
