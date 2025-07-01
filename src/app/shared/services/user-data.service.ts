import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient,private route:Router){}
  loadUsers():string[]{
    return ['Admin','Manager','QA']
  }
   

  addUserToDB(data:any){
   this.http.post('http://localhost:3000/users',data).subscribe((res)=>{
        this.route.navigateByUrl('/login')
    })}
  loadUserFromDB():Observable<any>{
    return this.http.get('http://localhost:3000/users')
  }
  deleteUser(id:string):Observable<any>{
    return this.http.delete(`http://localhost:3000/users/${id}`)
  }
  userLogin(uname:string,pass:string):Observable<User | null>{
    
    return this.http.get<User[]>(`http://localhost:3000/users?uname=${uname}&pass=${pass}`)
    .pipe(map(users => users.length ? users[0]: null))
   
    
  }
}
