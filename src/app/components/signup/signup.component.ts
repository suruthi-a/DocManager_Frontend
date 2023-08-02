import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PayloadService } from 'src/app/service/payload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  name:string
  email: string;
  password: string;
  isConfirm:boolean;
  errorCode:any;
  userId:any;
  verifycode:string;

  constructor(private payload:PayloadService,private router: Router){
    this.isConfirm = false;
  }

  onSubmit():void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.payload.signUp(this.name,this.email,this.password).subscribe(
      (res) => {
      this.userId = res.body.userSub;     
      this.isConfirm = true;
     },
    (err) => {
      if (err.code === 'UsernameExistsException') {
        this.errorCode=err.message;
        console.log(this.errorCode);
      }
    }
    );
}
  

  confirmSignUp(){
    this.payload.confirmsignUp(this.name,this.verifycode).subscribe(
      (res) => {
      this.userId = res.body;     
      this.isConfirm = true;
      this.router.navigate(['/signin']);
     },
    (err) => {
      if (err.body.code === 'CodeMismatchException') {
        this.errorCode=err.message;
        console.log(this.errorCode);
      }
    }
    );     
  }
}
