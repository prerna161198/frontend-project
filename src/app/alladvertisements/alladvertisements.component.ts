import { Component } from '@angular/core';
import { AdvertisementserviceService } from 'src/services/advertisementservice.service';

@Component({
  selector: 'app-alladvertisements',
  templateUrl: './alladvertisements.component.html',
  styleUrls: ['./alladvertisements.component.css']
})
export class AlladvertisementsComponent {
  advertisements:any;
  constructor(private advertisementService:AdvertisementserviceService)
  {

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
}
