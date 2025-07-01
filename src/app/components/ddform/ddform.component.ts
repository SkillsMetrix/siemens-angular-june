import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../../shared/services/user-data.service';

@Component({
  selector: 'app-ddform',
  templateUrl: './ddform.component.html',
  styleUrl: './ddform.component.css'
})
export class DdformComponent implements OnInit{
  userForm!: FormGroup
  ngOnInit(): void {
     this.userForm= this.fb.group({
        uname:['',Validators.required],
        pass:['',[Validators.required,Validators.minLength(6)]],
        email:['',[Validators.required,this.emailDomainValidator]],
        city:[''],
        state:['']
     }) 
  }
  constructor(private fb:FormBuilder,private us:UserDataService){
   }
  get formControls(){
   return this.userForm.controls
  }

  State=['MH','KA','TN','TS','DEL']

  addUser(){
   this.us.addUserToDB(this.userForm.value)
     
     }

     emailDomainValidator(control:FormControl){
      let email= control.value
      if(email && email.indexOf('@')!=-1){
         let[emailname,domain]=email.split('@')
         if(domain !=='siemens.com'){
            return {
               emailError:{
                  appDomain:domain
               }
            }
         }
      }
      return null
     }
    
}
