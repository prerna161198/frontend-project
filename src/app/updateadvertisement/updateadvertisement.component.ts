import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementserviceService } from 'src/services/advertisementservice.service';

@Component({
  selector: 'app-updateadvertisement',
  templateUrl: './updateadvertisement.component.html',
  styleUrls: ['./updateadvertisement.component.css']
})
export class UpdateadvertisementComponent {

  Message:any="Success"
  constructor(private advertisementService:AdvertisementserviceService, private router:Router){}
  
  updateAdvertisement(id:any,title:any,text:any,status:any,location:any,lastDate:any,price:any,image:any)

  {

    console.log(id.value,title.value,text.value,status.value,location.value,lastDate.value,price.value,image.value);

    this.advertisementService.advertisementEdit(id.value,title.value,text.value,status.value,location.value,lastDate.value,price.value,image.value).subscribe(

      response => {

        console.log(response);
        if(response.Status==this.Message)
        {
          alert("Advertisement Information Updated");
          
        }

      }

    );
 
}
}
