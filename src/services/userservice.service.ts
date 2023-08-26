import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient:HttpClient,private router:Router) { }
  
  addUser(user:any):Observable<any>

  {

    const headers={'content-type':'application/json'};

    const body=JSON.stringify(user);

    return this.httpClient.post("http://localhost:8080/api/v1/user",body,{'headers':headers});

  }
  

  loginUser(email:any,password:any):Observable<any>

  {

   // const headers={'content-type':'application/json'};

    const params=new HttpParams().set('email',email).set('password',password);

    return this.httpClient.post("http://localhost:8080/api/v1/user/login",params);

  }

  getUserdataByIEmail(email:any):Observable<any>

  {

    return this.httpClient.get("http://localhost:8080/api/v1/user/"+email);

  }
  getUserimage(id:any):Observable<any>

  {

    return this.httpClient.get("http://localhost:8080/api/v1/files/"+id);

  }
    
  userEdit(id:any,name:any,email:any,gender:any,password:any,mobile:any,address:any,city:any,state:any,pincode:any,country:any,profilePicture:any):Observable<any>

  {

    //const headers={'content-type':'application/json'};

    const params=new HttpParams().set('name',name)
                                .set('email',email)
                                .set('gender',gender)
                                .set('password',password)
                                .set('mobile',mobile)
                                .set('address',address)
                                .set('city',city)
                                .set('state',state)
                                .set('pincode',pincode)
                                .set('country',country)
                                .set('profilePicture',profilePicture)
    return this.httpClient.put("http://localhost:8080/api/v1/user/"+id,params);

  }
}
