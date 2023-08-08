import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyserviceService } from '../services/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  route=inject(Router) //inject method
  myservice=inject(MyserviceService)
  email:FormControl=new FormControl()
  pwd:FormControl=new FormControl()
  error:String = ""

  login()
  {
    if(this.email.valid && this.pwd.valid)
    {
      const data = this.myservice.userobj;
      const user= data.find(u=> u.email == this.email.value && u.pwd==this.pwd.value);
      if (!user)
      {
         this.error="invalid email/password"
         return
      }

      this.route.navigate(['/mystore']);

    }
  }

}
