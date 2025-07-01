import { Component, Input } from '@angular/core';
import { UserDataService } from '../../shared/services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  addUser(){
    alert('user added')
  }

  constructor(private us:UserDataService){
    this.userDetails=this.us.loadUsers()
  }

  // create an array

  userDetails:string[]=[]
  profile='https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ='
  
  @Input()
  uname='Abhi'
}
