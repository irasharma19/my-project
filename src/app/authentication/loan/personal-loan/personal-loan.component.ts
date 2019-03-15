import { Component, OnInit } from '@angular/core';
import { LoanServicesService } from '../loan-services.service';
@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.css']
})
export class PersonalLoanComponent implements OnInit {

  constructor(private ls:LoanServicesService) { }

  ngOnInit() {
  }

  getEMI1():number
  {
    return this.ls.getEMI();
  }
  setvalues1(x,y,z):void
  {
     this.ls.setvalues(x,y,z);
  }

}
