import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs'
import 'rxjs/rx';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: Http) { }
url:string="http://localhost:3000/users/"
getUser(id):Observable<any>
{
  return this.http.get(this.url+id)
  .map((response:any)=>response)
}
postUser(user:User)
{
  return this.http.post(this.url,user)
  .map((response:any)=>response)
}
deleteUser(id)
{
  return this.http.delete(this.url+id)
  .map((response:any)=>response)
}
}

