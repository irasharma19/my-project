import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  disp1:boolean = true;
  disp2:boolean = false;
  onSubmit(myForm)
  {
    console.log(myForm);
    
  }
  constructor() { }
  form;
  ngOnInit()
  {
    this.form=new FormGroup({
      username:new FormControl("",Validators.compose([Validators.required,Validators.minLength(6)])),
      password:new FormControl("",Validators.compose([Validators.required,Validators.minLength(5)])),
    })
    
    }
    abc(x,y){
      if(x==y)
      {
        this.disp1 = false;
        this.disp2 = true;
      }
    }

}
