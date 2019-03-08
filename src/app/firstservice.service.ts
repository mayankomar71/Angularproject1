import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor() { }
arr = [{
    "FirstName": "Mayank",
    "LastName": "Omar",
    "Email": "mayankomar71@gmail.com",
    "Id": 123,
    "PhoneNumber": 9554899814,
    "Designation": "Software Engineer",
    "DOB": 18021998
},
{
    "FirstName": "Sahib",
    "LastName": "Bhatia",
    "Email": "sahibbhatia11@gmail.com",
    "Id": 456,
    "PhoneNumber": 9554899824,
    "Designation": "Tester",
    "DOB": 11021998
},
{
    "FirstName": "Prateek",
    "LastName": "jain",
    "Email": "prateekjain@gmail.com",
    "Id": 459,
    "PhoneNumber": 9554899825,
    "Designation": "Software engineer",
    "DOB": 12021999
},
{
    "FirstName": "Harsh",
    "LastName": "gupta",
    "Email": "harshgupta@gmail.com",
    "Id": 459,
    "PhoneNumber": 9554899856,
    "Designation": "Software engineer",
    "DOB": 15021999
},
{
    "FirstName": "Kamal",
    "LastName": "gupta",
    "Email": "kamalgupta@gmail.com",
    "Id": 956,
    "PhoneNumber": 9554899889,
    "Designation": "Software engineer",
    "DOB": 15021999
},
{
    "FirstName": "Rocky",
    "LastName": "singh",
    "Email": "rockysingh@gmail.com",
    "Id": 900,
    "PhoneNumber": 9554899789,
    "Designation": "Intern",
    "DOB": 19021999
}

]
  newArray;

  setdata() {
    this.newArray = this.arr;
  }
  getdata() {
    return this.newArray;
  }
}
