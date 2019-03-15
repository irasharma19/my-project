import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  x:number=1;
  option:number=0;
   
    display(x):void{
      console.log(x);
      this.option=x;
    }
}
