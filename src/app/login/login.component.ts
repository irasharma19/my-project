import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  disp1:boolean = true;
  disp2:boolean = false;
  disp3:boolean = true;
  disp4:boolean = false;
  disp5:boolean = true;
  disp6:boolean = false;
  onSubmit(myForm)
  {
    console.log(myForm);

  }
  form;form2;
  user:User={"id":4,"password":"111111","username":"irasharma","email":"ira19sharma@gmail.com"};
  constructor(private adminService: AdminService){

  }
  ngOnInit()
  {
    this.form=new FormGroup({
      id:new FormControl("",Validators.compose([Validators.required,Validators.minLength(1)])),
      password:new FormControl("",Validators.compose([Validators.required,Validators.minLength(4)])),
    })


    this.form2=new FormGroup({
      
      id:new FormControl("",Validators.compose([Validators.required,Validators.minLength(1)])),
      password:new FormControl("",Validators.compose([Validators.required,Validators.minLength(4)])),
      username:new FormControl("",Validators.compose([Validators.required,Validators.minLength(5)])),
      email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
    })
    }
    check(id,password):any
  {
   this.adminService.getUser(id)
    .subscribe(
    (response )=>
      this.user = response.json(),
      (error)=>{
        console.log("Record with id "+id+" doesn't exist")
        this.errorMsg = "Record with id "+id+" doesn't exist";
      })
      if(this.user.password==password)
      {
        this.disp1 = false;
        this.disp2 = true;
        this.disp3 = false;
        this.disp4 = false;
        this.disp5 = false;
        this.disp6 = false;
      }
      else
      {
        console.log("Not working");
      }
    
    
  }
     check2(x):void{
      if(x=="yes"||x=='y'||x=='YES')
      {
        this.disp3 = false;
        this.disp4 = true;
        this.disp1 = false;
        this.disp2 = false;
       
      }
     }
     abc(id,password,username,email){
      
        this.disp5 = false;
        this.disp6= true;
        let user1=new User(id,password,username,email);
        this.adminService.postUser(user1)
        .subscribe(
          (response:any)=>console.log('put sucessfully')
          )
      this.disp1=true;
    }



}
