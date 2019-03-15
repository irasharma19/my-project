import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ServicesComponent } from './authentication/services/services.component';
import { DepositComponent } from './authentication/deposit/deposit.component';
import { LoanComponent } from './authentication/loan/loan.component';
import { RecurringdepositComponent } from './authentication/deposit/recurringdeposit/recurringdeposit.component';
import { FixeddepositComponent } from './authentication/deposit/fixeddeposit/fixeddeposit.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { LoanServicesService } from './authentication/loan/loan-services.service';
import { HomeLoanComponent } from './authentication/loan/home-loan/home-loan.component';
import { CarLoanComponent } from './authentication/loan/car-loan/car-loan.component';
import { EducationLoanComponent } from './authentication/loan/education-loan/education-loan.component';
import { PersonalLoanComponent } from './authentication/loan/personal-loan/personal-loan.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BackDetailsDirective } from './back-details.directive';
import { AdminService } from './admin.service';
import { HttpModule } from '@angular/http';
import { CardsComponent } from './cards/cards.component';
import { AccountComponent } from './account/account.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ServicesComponent,
    DepositComponent,
    LoanComponent,
    RecurringdepositComponent,
    FixeddepositComponent,
    LoginComponent,
    HomeComponent,
    Home2Component,
    HomeLoanComponent,
    CarLoanComponent,
    EducationLoanComponent,
    PersonalLoanComponent,
    SignUpComponent,
    BackDetailsDirective,
    CardsComponent,
    AccountComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [LoanServicesService,AdminService],
  bootstrap: [AuthenticationComponent]
})
export class AppModule { }
