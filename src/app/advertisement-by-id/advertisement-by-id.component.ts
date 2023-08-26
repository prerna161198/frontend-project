import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementserviceService } from 'src/services/advertisementservice.service';

@Component({
  selector: 'app-advertisement-by-id',
  templateUrl: './advertisement-by-id.component.html',
  styleUrls: ['./advertisement-by-id.component.css']
})
export class AdvertisementByIdComponent {
  advById:any;
  constructor(private advertisementService:AdvertisementserviceService,private router:Router)
  {

  }
  getAdvertisementById(id:any)
  {
    this.advertisementService.getAdvById(id.value).subscribe(

      (response)=>{
        console.log(response);
        this.advById=response;
      }
    );
  }

  redirectToPayment(){
    
    this.router.navigate(['/payment']);
  } 
}
