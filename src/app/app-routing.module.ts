import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DdformComponent } from './components/ddform/ddform.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppGuard } from './shared/guard/AppGuard.service';
import { UserComponent } from './components/portfolio/user/user.component';
import { CompanyComponent } from './components/portfolio/company/company.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
   {path:'login',component:LoginComponent},
   {path:'register',component:DdformComponent},
   {path:'userdetails',component:UserdetailsComponent,canActivate:[AppGuard]},
   {path:'portfolio',component:PortfolioComponent,
    children:[
      {path:'user',component:UserComponent},
      {path:'company',component:CompanyComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
