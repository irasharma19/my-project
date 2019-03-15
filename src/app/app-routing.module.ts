import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ServicesComponent } from './authentication/services/services.component';
import { DepositComponent } from './authentication/deposit/deposit.component';
import { LoanComponent } from './authentication/loan/loan.component';
import { RecurringdepositComponent } from './authentication/deposit/recurringdeposit/recurringdeposit.component';
import { FixeddepositComponent } from './authentication/deposit/fixeddeposit/fixeddeposit.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';
import { CardsComponent } from './cards/cards.component';
const routes: Routes = [
  {
    path:'home2.html',
    component:AuthenticationComponent
  },
  {
    path:'deposit.html',
    component:DepositComponent
  },
  {
    path:'services.html',
    component:ServicesComponent
  },
  {
    path:'loan.html',
    component:LoanComponent
  },
  {
    path:'login.html',
    component:LoginComponent
  },
  {
    path:'home.html',
    component:HomeComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'fixeddeposit.html',
    component:FixeddepositComponent
  },
  {
    path:'recurringdeposit.html',
    component:RecurringdepositComponent
  },
  {
    path:'signup.html',
    component:SignUpComponent
  },
  {
    path:'cards.html',
    component:CardsComponent
  },
  {
    path:'account.html',
    component:AccountComponent
  },
 
 
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
