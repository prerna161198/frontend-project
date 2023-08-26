import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementserviceService } from 'src/services/advertisementservice.service';

@Component({
  selector: 'app-advertisement-by-user',
  templateUrl: './advertisement-by-user.component.html',
  styleUrls: ['./advertisement-by-user.component.css']
})
export class AdvertisementByUserComponent {
  advertisement:any;
  constructor(private advertisementService:AdvertisementserviceService,private router:Router)
  {

  }

  getAdvertisement(userid:any)
  {
      this.advertisementService.getUserAdvertisement(userid.value).subscribe(

        (response)=>{

          console.log(response);
          
          if(response.length>0){
            this.advertisement=response;
          }
          else{
            this.advertisement=null;
          }

        },
        (error)=>{
          console.error('Error fetching advertisement:',error);
        }

      );
  }

  redirectToPayment(){
    
    this.router.navigate(['/payment']);
  } 
}
