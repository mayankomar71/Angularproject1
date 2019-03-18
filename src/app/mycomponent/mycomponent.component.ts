import { Component, OnInit } from '@angular/core';
import {FirstserviceService} from '../firstservice.service'

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  constructor(private myservice: FirstserviceService ) { }
  title = 'sampleangularproject';
  value: string;
  name: string;

heads;
   getValue(){
    this.value = this.myservice.getdata();
    this.heads = Object.keys(this.value[1]);

    }
    sorts(head)
    {
      this.myservice.sort(head);
    }


  ngOnInit() {
    this.myservice.setdata();
  }

}
