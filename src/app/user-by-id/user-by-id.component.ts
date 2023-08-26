import { Component } from '@angular/core';
import { UserserviceService } from 'src/services/userservice.service';
import { UserloginComponent } from '../userlogin/userlogin.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.css']
})
export class UserByIdComponent {
  user:any;
  userEmail:any=UserloginComponent
  constructor(private userService:UserserviceService ,private router:Router)
  {

  }

 getUser(email:any)
 {
      this.userService.getUserdataByIEmail(email.value).subscribe(

        (response)=>{

          console.log(response);

          if(response)
          {
             this.user=response;
          }
          else{
            this.user=null
          }

        },
        (error)=>{
          console.error('Error fetching user:',error);
        }

      );
 }

  redirectToSaveUser()
  {
    this.router.navigate(['/saveuser']);
  }
  }












