import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementserviceService {

  constructor(private httpClient:HttpClient) { }

  createAdvertisement(advertisement:any):Observable<any>

  {

    const headers={'content-type':'application/json'};

    const body=JSON.stringify(advertisement);

    return this.httpClient.post("http://localhost:8080/api/v1/advertisement",body,{'headers':headers});

  }

  getUserAdvertisement(userid:any):Observable<any>
  {
    return this.httpClient.get("http://localhost:8080/api/v1/advertisement/user/"+userid);
  }

  getAllAdvertisements():Observable<any>
  {
    return this.httpClient.get("http://localhost:8080/api/v1/advertisements");
  }

  getAdvById(id:any):Observable<any>
  {
    return this.httpClient.get("http://localhost:8080/api/v1/advertisement/"+id);
  }
  getcategoryAdvertisement(category:any):Observable<any>
  {
    return this.httpClient.get("http://localhost:8080/api/v1/advertisement/category/"+category);
  }

  getLocationAdvertisement(location:any):Observable<any>
  {
    return this.httpClient.get("http://localhost:8080/api/v1/advertisement/location/"+location);
  }

  deleteAdvertisementById(id:any):Observable<any>
  {
    return this.httpClient.delete("http://localhost:8080/api/v1/delete/advertisement/"+id);
  }

    
  advertisementEdit(id:any,title:any,text:any,status:any,location:any,lastDate:any,price:any,image:any):Observable<any>

  {

    //const headers={'content-type':'application/json'};

    const params=new HttpParams().set('title',title)
                                .set('text',text)
                                .set('status',status)
                                .set('location',location)
                                .set('lastDate',lastDate)
                                .set('price',price)
                                .set('image',image);
                                
    return this.httpClient.put("http://localhost:8080/api/v1/advertisement/"+id,params);

  }
}
