import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  message:string=''
  count:number=0
  increment(){
    this.count= this.count+1
    this.message= "Counter "+ this.count
  }
 decrement(){
    this.count= this.count-1
    this.message= "Counter "+ this.count
  }

}
