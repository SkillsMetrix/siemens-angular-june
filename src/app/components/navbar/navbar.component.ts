import { Component } from '@angular/core';
import { AppGuard } from '../../shared/guard/AppGuard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(public guard:AppGuard){}
}
