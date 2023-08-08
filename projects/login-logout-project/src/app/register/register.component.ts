import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../services/myservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    submitted=false

constructor(private route : Router, private serv1 : MyserviceService){}

    registerForm= new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.email]),
    mobile: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    pwd: new FormControl("", [Validators.required,Validators.minLength(5)]),
    cpwd: new FormControl("", [Validators.required,Validators.minLength(5)])


  });

  submit(){

    this.submitted=true
    const {email,pwd}=this.registerForm.value 

    //const emailid1 = this.form.controls['email'].value
    //const pwd1= this.form.controls['pwd'].value

    const data = {email,pwd}
    this.serv1.userobj.push(data);
    alert("New User is registered ! ")

    console.log(this.serv1.userobj)
    this.route.navigate(['/login']);

  }


}
