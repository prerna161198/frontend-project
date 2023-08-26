import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/services/userservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  loginMessage:any="Success";

  errorMessage:any=404;
  
  constructor(private userService:UserserviceService, private router:Router){}
  
 
  userLogin(email:any,password:any)

  {

    console.log(email.value,password.value);

    this.userService.loginUser(email.value,password.value).subscribe(

      (response) => {

        console.log(response);
        if(response.Status==this.loginMessage){
          this.router.navigate(['/user']);
        }
        else{
          
          alert("Invalid email or password");
        }
        
        
      },
      (error)=>{
        console.log(error.error.text);
      }

    );

    

  }

  redirectToRegistrationPage(){
    this.router.navigate(['/register']);
  }
  
  redirectToUserHomePage(){
    this.router.navigate(['/user']);
  }
}
