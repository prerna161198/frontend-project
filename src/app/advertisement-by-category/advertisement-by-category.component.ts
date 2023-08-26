import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementserviceService } from 'src/services/advertisementservice.service';

@Component({
  selector: 'app-advertisement-by-category',
  templateUrl: './advertisement-by-category.component.html',
  styleUrls: ['./advertisement-by-category.component.css']
})
export class AdvertisementByCategoryComponent {
  advertisement:any;
  constructor(private advertisementService:AdvertisementserviceService, private router:Router)
  {

  }

  getAdvertisementByCategory(category:any)
  {
      this.advertisementService.getcategoryAdvertisement(category.value).subscribe(

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
