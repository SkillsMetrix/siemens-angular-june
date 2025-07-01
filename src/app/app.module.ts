import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalcComponent } from './components/calc/calc.component';
import { FormComponent } from './components/form/form.component';
import { DdformComponent } from './components/ddform/ddform.component';
import { ErrorComponent } from './components/error/error.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserdetailsComponent } from './components/userdetails/userdetails.component'
import { Logger } from './shared/interceptors/Logger.interceptor';
import { CacheApp} from './shared/interceptors/Logger2.interceptor';
import { Error } from './shared/interceptors/Error.interceptor';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { UserComponent } from './components/portfolio/user/user.component';
import { CompanyComponent } from './components/portfolio/company/company.component';
@NgModule({
  // all components declared here
  declarations: [
    AppComponent,
    MainAppComponent,
    HeaderComponent,
    FooterComponent,
    CalcComponent,
    FormComponent,
    DdformComponent,
    ErrorComponent,
    UserdetailsComponent,
    LoginComponent,
    PortfolioComponent,
    NavbarComponent,
    LandingpageComponent,
    UserComponent,
    CompanyComponent
  ],
  // declare module
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:Logger,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:CacheApp,multi:true},
     {provide:HTTP_INTERCEPTORS,useClass:Error,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
