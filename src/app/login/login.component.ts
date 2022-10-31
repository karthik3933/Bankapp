import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //third execution
  aim='Your Perfect Banking Partner';
  accounts="Enter Your Acno Here";

  acno='';
  pswd='';
  
 
  constructor() { } //first execution

  ngOnInit(): void { //life cycle hooks - innitial process //second execution
  }
  userDetails:any={//object of object
    1000:{acno:1000,username:'karthik',password:1000,balance:1000000},
    1001:{acno:1001,username:'robin',password:1001,balance:100000},
    1002:{acno:1001,username:'jini',password:1002,balance:10000},
  }
//user defined function() //fourth execution
acnoChange(event:any){
  // console.log(event);
  console.log(event.target.value);
  this.acno=event.target.value;

  }
  pswdChange(event:any){
    console.log(event.target.value);
    this.pswd=event.target.value;

}


login(){
  // alert('Login clicked');
  var acno=this.acno;//1000
  var pswd=this.pswd;//1000

  var userDetails=this.userDetails;

  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      alert("login successfull")
    }
    else{
      alert("successfully failed")
    }
  }
  else{
    alert("user doesnot exist")
  }
}
}
