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
  flag: boolean = true;

  setdata() {
    this.newArray = this.arr;
  }

  sort(head) {
    console.log(head);
    switch (head) {
      case "FirstName":

        this.newArray.sort(function (a, b) {
          if (a.FirstName < b.FirstName) {
            return -1;
          }
          if (a.FirstName > b.FirstName) {
            return 1;
          }
          return 0;
        });



        break;
      case "LastName":
        this.newArray.sort(function (a, b) {
          if (a.LastName < b.LastName) {
            return -1;
          }
          if (a.LastName > b.LastName) {
            return 1;
          }
          return 0;
        });


        break;
      case "Email":
        this.newArray.sort(function (a, b) {
          if (a.Email < b.Email) {
            return -1;
          }
          if (a.Email > b.Email) {
            return 1;
          }
          return 0;
        });


        break;
      case "Id":
        this.newArray.sort(function (a, b) {
          return a.Id - b.Id;
        });

        break;
      case "PhoneNumber":
        this.newArray.sort(function (a, b) {
          return a.PhoneNumber - b.PhoneNumber;
        });

        break;
      case "Designation":
        this.newArray.sort(function (a, b) {
          if (a.Designation < b.Designation) {
            return -1;
          }
          if (a.Designation > b.Designation) {
            return 1;
          }
          return 0;
        });


        break;
      case "DOB":
        this.newArray.sort(function (a, b) {
          return a.DOB - b.DOB;
        });
        break;
      default:


    }


  }

  
  getdata() {
    return this.newArray;
  }
}
