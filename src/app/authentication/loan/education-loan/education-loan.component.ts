import { Component, OnInit } from '@angular/core';
import { LoanServicesService } from '../loan-services.service';
@Component({
  selector: 'app-education-loan',
  templateUrl: './education-loan.component.html',
  styleUrls: ['./education-loan.component.css']
})
export class EducationLoanComponent implements OnInit {

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
