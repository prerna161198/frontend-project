import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementserviceService } from 'src/services/advertisementservice.service';

@Component({
  selector: 'app-myadvertisements',
  templateUrl: './myadvertisements.component.html',
  styleUrls: ['./myadvertisements.component.css']
})
export class MyadvertisementsComponent {

  advertisement:any;
  constructor(private advertisementService:AdvertisementserviceService, private router:Router)
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
  redirectToUpdateAdvertisement(){
    
    this.router.navigate(['/updateadvertisement']);
  }
 
  deleteAdvertisement(id:any)
  {
    this.advertisementService.deleteAdvertisementById(id).subscribe(

      (response)=>{
        console.log(response);
        
      },
      (error)=>{
        console.log(error);
      }
      
    );
  }
}
