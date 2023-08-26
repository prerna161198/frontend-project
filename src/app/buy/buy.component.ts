import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementserviceService } from 'src/services/advertisementservice.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {

  advertisements:any;
   constructor( private router:Router,private advertisementService:AdvertisementserviceService){}

   ngOnInit(){
    this.getAdvertisements();
   }
   

   getAdvertisements()
  {
      this.advertisementService.getAllAdvertisements().subscribe(

        (response)=>{

          console.log(response);
          
          if(response.length>0){
            this.advertisements=response;
          }
          else{
            this.advertisements=null;
          }

        },
        (error)=>{
          console.error('Error fetching advertisement:',error);
        }

      );
  }

  redirectToAllAdvertisements(){
    
    this.router.navigate(['/alladvertisements']);
  }

  redirectToAdvertisementById(){
    
    this.router.navigate(['/advertisementById']);
  }

  redirectToAdvertisementByUser(){
    
    this.router.navigate(['/advertisementByUser']);
  }
  redirectToAdvertisementByCategory(){
    
    this.router.navigate(['/advertisementByCategory']);
  }
  

redirectToAdvertisementByLocation(){
    
    this.router.navigate(['/advertisementByLocation']);
  }
}