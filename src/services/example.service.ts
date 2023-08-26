import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

 constructor(private httpClient:HttpClient){}

 uploadImage(imagePath:any):Observable<any>
 {
  const params=new HttpParams().set('imagePath',imagePath);
  
  return this.httpClient.post("http://localhost:8080/api/v1/upload/",params);
 }

 getImage(id:any):Observable<any>{
  return this.httpClient.get("http://localhost:8080/api/v1/GetImage/"+id);
 }

}
