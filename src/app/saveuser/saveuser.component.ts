import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/services/userservice.service';

@Component({
  selector: 'app-saveuser',
  templateUrl: './saveuser.component.html',
  styleUrls: ['./saveuser.component.css']
})
export class SaveuserComponent {
 
  Message:any="Success"
  constructor(private userService:UserserviceService, private router:Router){}
  
  editUser(id:any,name:any,email:any,gender:any,password:any,mobile:any,address:any,city:any,state:any,pincode:any,country:any,profilePicture:any)

  {

    console.log(name.value,email.value,gender.value,password.value,mobile.value,address.value,city.value,state.value,pincode.value,country.value,profilePicture.value);

    this.userService.userEdit(id.value,name.value,email.value,gender.value,password.value,mobile.value,address.value,city.value,state.value,pincode.value,country.value,profilePicture.value).subscribe(

      response => {

        console.log(response);
        if(response.Status==this.Message)
        {
          alert("User Information Updated");
          
        }

      }

    );
 
}
}
