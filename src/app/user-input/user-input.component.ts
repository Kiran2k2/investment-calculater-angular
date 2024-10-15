import { Component, EventEmitter, Output, signal } from '@angular/core';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
@Output() calculate =new EventEmitter<InvestmentInput>()
  enteredInitialInvest= signal('0')
  enteredAnnulaInvestment=signal('0')
  enteredExpectedReturn=signal('5')
  enteredDuration=signal('10')
 onSubmit(){
  console.log("submit");
//  console.log(this.enteredAnnulaInvestment);
//  console.log(this.enteredDuration);
//  console.log(this.enteredExpectedReturn);
//  console.log(this.enteredInitialInvest);
this.calculate.emit(
  {
    initialInvestment:+this.enteredInitialInvest(),
    duration:+this.enteredDuration(),
    expectedReturn:+this.enteredExpectedReturn(),
    annualInvestment:+this.enteredAnnulaInvestment()
  }
);
  this.enteredInitialInvest.set('0')
  this.enteredAnnulaInvestment.set('0')
  this.enteredExpectedReturn.set('0')
  this.enteredDuration.set('0')

 }
}
