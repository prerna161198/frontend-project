import { Component } from '@angular/core';
import { ExampleService } from 'src/services/example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  
  constructor(private exampleService:ExampleService){}
  
  saveImage(imagePath:any){

    this.exampleService.uploadImage(imagePath.value).subscribe(

      response=>{
        console.log(response)
      },
      error=>{
        console.log(error);
      }
    );

    

    }
    userImage:any;
    fetchImage(id:any){
      this.exampleService.getImage(id.value).subscribe(
        (response)=>{
          console.log(response);
          this.userImage=response;
        }
      );
    }
  }
  
  
  

