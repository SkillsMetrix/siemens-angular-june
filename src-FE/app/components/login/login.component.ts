import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { Router } from '@angular/router';
import { LoginService } from '../../shared/login.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  regForm: FormGroup;
  constructor(private fb: FormBuilder,
    private route:Router,private ls:LoginService
  ) {
    this.regForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });}

    login(){
   this.ls.loginUser(this.regForm.value).subscribe({
    next:() => this.route.navigate(["/protected"])
   })
   
      
    }
}
