import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuardService } from './shared/auth-guard.service';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'protected',component:ProtectedComponent,canActivate:[AuthGuardService]},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
