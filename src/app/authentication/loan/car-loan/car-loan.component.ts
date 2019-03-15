import { Component, OnInit } from '@angular/core';
import { LoanServicesService } from '../loan-services.service';
@Component({
  selector: 'app-car-loan',
  templateUrl: './car-loan.component.html',
  styleUrls: ['./car-loan.component.css']
})
export class CarLoanComponent implements OnInit {

  constructor(private ls:LoanServicesService ) { }

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
