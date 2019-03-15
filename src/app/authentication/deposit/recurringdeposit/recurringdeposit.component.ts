import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recurringdeposit',
  templateUrl: './recurringdeposit.component.html',
  styleUrls: ['./recurringdeposit.component.css']
})
export class RecurringdepositComponent implements OnInit {
   m:number=0;
  r:number=0;
  n:number=0;
  i:number=0;
  constructor() { }

  ngOnInit() {
  }
  getEMI():number{
    
    
    this.m= this.r*((1+this.i)*this.n-1)/(1-(1+this.i)-1/3)
    
    return this.r;
  }
  
  setvalues(x,y,z):void{
    this.m=x;
    this.r=y;
    this.n=z;
 
  }


}
