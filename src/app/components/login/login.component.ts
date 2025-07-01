import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../../shared/services/user-data.service';
import { Router } from '@angular/router';
import { AppGuard } from '../../shared/guard/AppGuard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userForm!: FormGroup;
  ngOnInit(): void {
    this.userForm = this.fb.group({
      uname: ['', Validators.required],
      pass: ['', [Validators.required]],
    });
  }
  constructor(private fb: FormBuilder, private us: UserDataService,private route:Router,
    private guard:AppGuard
  ) {}
  get formControls() {
    return this.userForm.controls;
  }

  login() {
    const {uname,pass}=this.userForm.value
    this.us.userLogin(uname,pass).subscribe(user =>{
      if(user){
        this.guard.isAllowed=true
       this.route.navigateByUrl('/userdetails')
      }else{
        alert('login Failed')
      }
    })
  }
}
