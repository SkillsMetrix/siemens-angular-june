import { Component } from '@angular/core';
import { UserDataService } from '../../shared/services/user-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private us:UserDataService){}
  State=['MH','KA','TN','TS','DEL']

  addUser(nf:NgForm){
     
    
    this.us.addUserToDB(nf.value)
  }
}
