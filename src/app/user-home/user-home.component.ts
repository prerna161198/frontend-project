import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementserviceService } from 'src/services/advertisementservice.service';
import { UserserviceService } from 'src/services/userservice.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {


  advertisements:any;
  constructor(private userService:UserserviceService, private router:Router, private advertisementService:AdvertisementserviceService){}

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

  redirectToUserProfile(){

    this.router.navigate(['/profile']);
  }

  redirectToMyAdvertisements(){
    
    this.router.navigate(['/MyAdvertisements']);
  }

  redirectToBuy(){
    
    this.router.navigate(['/buy']);
  }

  redirectToSell(){
    
    this.router.navigate(['/sell']);
  }  

  redirectToPayment(){
    
    this.router.navigate(['/payment']);
  } 
}
