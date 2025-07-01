import { Component } from '@angular/core';
import { UserDataService } from '../../shared/services/user-data.service';
import { AppGuard } from '../../shared/guard/AppGuard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {


  constructor(private us:UserDataService,private guard:AppGuard,private router:Router){
    this.loadUsers()
  }

  logout(){
    this.guard.isAllowed=false
    this.router.navigateByUrl('/login')
  }
  deleteUser(uname:string){
    this.us.deleteUser(uname).subscribe((res)=>{
      console.log('employee deleted '+ res);
      this.loadUsers()
      
    })
  }
   users:any[]=[]
     loadUsers(){
      this.us.loadUserFromDB().subscribe((res)=>{
         this.users=res
      })
     }
}
