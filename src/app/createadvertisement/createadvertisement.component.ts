import { Component } from '@angular/core';
import { AdvertisementService } from '../advertisement.service';
import { AdvertisementserviceService } from 'src/services/advertisementservice.service';

@Component({
  selector: 'app-createadvertisement',
  templateUrl: './createadvertisement.component.html',
  styleUrls: ['./createadvertisement.component.css']
})
export class CreateadvertisementComponent {

  message:any="Success";
  constructor(private advertisementService:AdvertisementserviceService){}

  addAdvertisement(advertisement:any)

  {

    console.log(advertisement.value);

    const user={id:advertisement.user};
    const category={id:advertisement.category};

    const advertisementData={
      title:advertisement.title,
      text:advertisement.text,
      postDate:advertisement.postDate,
      status:advertisement.status,
      location:advertisement.location,
      lastDate:advertisement.lastDate,
      price:advertisement.price,
      image:advertisement.image,
      user:user,
      category:category
    };
    this.advertisementService.createAdvertisement(advertisementData).subscribe(

      response => {

        console.log(response);
        if(response.Status==this.message){
          alert("Advertisement created..");
        }

      },
      (error)=>{
        console.log(error.error.text);
      }

    );

    

  }

}
