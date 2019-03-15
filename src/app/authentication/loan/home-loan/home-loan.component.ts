import { Component, OnInit } from '@angular/core';
import { LoanServicesService } from '../loan-services.service';
@Component({
  selector: 'app-home-loan',
  templateUrl: './home-loan.component.html',
  styleUrls: ['./home-loan.component.css']
})
export class HomeLoanComponent implements OnInit {

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
