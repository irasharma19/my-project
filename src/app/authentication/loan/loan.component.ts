import { Component, OnInit } from '@angular/core';

import { LoanServicesService } from './loan-services.service';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  constructor() { }
x:number=1;
option:number=0;
  ngOnInit() {
  }
  display(x):void{
    console.log(x);
    this.option=x;
  }
}
