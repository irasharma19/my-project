
export class LoanServicesService {

  constructor() { }
  p:number=0;
  t:number=0;
  r:number=0;
  emi:number=0;
  getEMI():number{
    
    return this.emi;
  }
  pow1(x,y):number{
    let res=x;
    for(let i=1;i<y;i++)
    {
      res*=x;
    }
    return res;
  }
  setvalues(x,y,z):void{
    this.p=x;
    this.t=y;
    this.r=z;
    this.r=this.r/1200;
    this.t=this.t*12;
    let g=1+this.r;
    let x1=this.pow1(g,this.t);
    this.emi= (this.p * this.r * x1)/(x1-1);
    console.log(this.emi);
      
  }
  }

