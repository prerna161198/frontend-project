import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/services/userservice.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  
 Message:any="Success"
  constructor(private userService:UserserviceService, private router:Router){}
  
  saveUser(user:any)

  {

    console.log(user.value);

    this.userService.addUser(user.value).subscribe(

      response => {

        console.log(response);
        if(response.Status==this.Message)
        {
          alert("Registered Successfully..");
          this.router.navigate(['/login']);
        }

      }

    );
 
}
}