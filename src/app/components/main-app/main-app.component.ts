import { Component, ViewChild } from '@angular/core';
import { CalcComponent } from '../calc/calc.component';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.css'
})
export class MainAppComponent {

  @ViewChild(CalcComponent)
  private users={} as CalcComponent

  inc(){
    this.users.increment()
  }
  dec(){
    this.users.decrement()
  }

  userName='Akash'
}
