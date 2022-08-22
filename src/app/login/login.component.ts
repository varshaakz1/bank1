import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //property/variable
  header="Welcome to Our Bank...."
  accPlaceholder="Account Please"
  //acno
  acno=""
  //pswd
  pswd=""

  //database
  database:any={
    1000:{acno:1000,username:'neer',password:1000,balance:5000},
    1001:{acno:1001,username:'neera',password:1001,balance:6000},
    1002:{acno:1002,username:'neeraj',password:1002,balance:7000}
}

  constructor() { }

  ngOnInit(): void {
  }

  //user defined function
  acnoChange(event:any){
    this.acno=event.target.value
    }
    pswdChange(event:any){
      this.pswd=event.target.value


    }
   login(){
    //fetch acno
    var acno=this.acno
    console.log(acno);
    //fetch pswd
    var pswd=this.pswd
    console.log(pswd);

    let userDetails=this.database
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('login successfull')

      }
      else{
        alert('incorrect password')
      }

    }
    else{
      alert('user doesnot exist')
    }
    
    
  }

}
