import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  userobj: Array<any>= [{email:'admin12@abc.com',pwd:'1234567'},
  {email:'coder12@abc.com',pwd:'1234567'}]

}
