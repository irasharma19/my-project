import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

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
