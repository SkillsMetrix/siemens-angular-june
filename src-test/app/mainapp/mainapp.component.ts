import { Component } from '@angular/core';
import { Post, PostService } from '../PostService.service';

@Component({
  selector: 'app-mainapp',
  templateUrl: './mainapp.component.html',
  styleUrl: './mainapp.component.css'
})
export class MainappComponent {

  username='admin'
  users:{name:string}[]=[]
  posts:Post[]=[]
  constructor(private ps:PostService){
    this.ps.getPosts().subscribe((data)=>{
        this.posts=data
    })
  }
}
