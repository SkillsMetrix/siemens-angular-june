import { Component } from '@angular/core';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.css'
})
export class ProtectedComponent {

  constructor(private ls:LoginService){}


  logout(){
    this.ls.logout()
  }

}
