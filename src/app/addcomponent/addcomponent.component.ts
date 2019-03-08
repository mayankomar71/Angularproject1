import { Component, OnInit } from '@angular/core';
import {FirstserviceService} from '../firstservice.service'

@Component({
  selector: 'app-addcomponent',
  templateUrl: './addcomponent.component.html',
  styleUrls: ['./addcomponent.component.css']
})
export class AddcomponentComponent implements OnInit {

  constructor(private myservice: FirstserviceService) { }
  json =
    {
      FirstName: "",
      LastName: "",
      Email: "",
      Id: "",
      PhoneNumber: "",
      Designation: "",
      DOB: ""

    }
    value;

  ngOnInit() {
  }
add()
{
this.value=this.myservice.getdata();
this.value.push(this.json);
console.log(this.value);


}
}
