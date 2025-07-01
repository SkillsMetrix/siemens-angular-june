import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  shopCart = ['watch']

  getColor(country: string) {
    switch (country) {
      case 'Australia':
        return 'green'
      case 'india':
        return 'blue'
      case 'USA':
        return 'purple'
      default:
        return null;
    }
  }
  people=[
   
      {
        name:'smith',
        country: 'Australia'
      },
      {
        name:'john',
        country: 'USA'
      },
      {
        name:'Amit',
        country: 'india'
      }
    ]
  }


