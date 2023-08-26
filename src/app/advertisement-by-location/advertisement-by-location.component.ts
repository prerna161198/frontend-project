import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementserviceService } from 'src/services/advertisementservice.service';

@Component({
  selector: 'app-advertisement-by-location',
  templateUrl: './advertisement-by-location.component.html',
  styleUrls: ['./advertisement-by-location.component.css']
})
export class AdvertisementByLocationComponent {
  advertisement:any;
  constructor(private advertisementService:AdvertisementserviceService,private router:Router)
  {

  }

  getAdvertisementByLocation(location:any)
  {
      this.advertisementService.getLocationAdvertisement(location.value).subscribe(

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
