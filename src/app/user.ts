export class User
{
    id:number;
    password:string;
    username:string;
    email:string;
    constructor(id:number,password:string,username:string,email:string)
{
    this.id=id;
    this.password=password;
    this.username=username;
    this.email=email;
}
}