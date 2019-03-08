import { Component, OnInit } from '@angular/core';
import {FirstserviceService} from '../firstservice.service'

@Component({
  selector: 'app-addcomponent',
  templateUrl: './addcomponent.component.html',
  styleUrls: ['./addcomponent.component.css']
})
export class AddcomponentComponent implements OnInit {

  json:any;

  firstName:string;
  lastName:string;
  email:string;
  id:number;
  phoneNumber:number;
  designation:string
  dob:any;

  constructor(private myservice: FirstserviceService) { }
  
    value;

  ngOnInit() {
  }
add()
{ 
  this.json =
    {
      "FirstName":this.firstName ,
      "LastName": this.lastName,
      "Email": this.email,
      "Id": this.id,
      "PhoneNumber": this.phoneNumber,
      "Designation": this.designation,
      "DOB": this.dob

    }

this.value=this.myservice.getdata();
this.value.push(this.json);
console.log(this.value);


console.log(this.value);


}
}
