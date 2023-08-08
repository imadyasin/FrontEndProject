import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mystore',
  templateUrl: './mystore.component.html',
  styleUrls: ['./mystore.component.css']
})
export class MystoreComponent {
  userlogin=true
  route=inject(Router) //inject method

  category=['Earings','Bangles','Rings','Necklaces']
  pid?:number
  pm?:string
  ct?:string
  qt?:number
  pr?:number

 


  addproduct()
  {
   alert("Form has been submitted");


  }



  logout()
  {
      if(this.userlogin=true)
      {
        alert("You Logged Out successfully!!")
      }

      this.route.navigate(['/home']);

    }
}
