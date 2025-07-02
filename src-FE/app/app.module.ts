import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { JwtInterceptor } from './shared/jwt.interceptor';
import { PaymentInterceptor } from './shared/payment.interceptor';

@NgModule({
  // contains > pipe,directives,components
  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedComponent
  ],
  // only modules
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  // services and interceptors
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:PaymentInterceptor,multi:true}
  
  ],
  // welcome component
  bootstrap: [AppComponent]
})
export class AppModule { }
