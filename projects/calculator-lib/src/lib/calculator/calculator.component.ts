import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'lib-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number | string = 0;

  constructor(private calculatorService: CalculatorService) {}

  add() {
    this.result = this.calculatorService.add(this.number1, this.number2);
  }

  subtract() {
    this.result = this.calculatorService.subtract(this.number1, this.number2);
  }

  multiply() {
    this.result = this.calculatorService.multiply(this.number1, this.number2);
  }

  divide() {
    this.result = this.calculatorService.divide(this.number1, this.number2);
  }
}
