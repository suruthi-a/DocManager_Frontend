import { Component } from '@angular/core';
import { PayloadService } from 'src/app/service/payload.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string;
  password: string;
  errorCode:string;
  accessToken:string;
  msg:string;

  constructor(private payload:PayloadService,private router: Router,
                            private dataService: DataService) { }
  
  onSubmit():void { 
    console.log(this.email,this.password);
    
    this.payload.SignIn(this.email,this.password).subscribe(
      (res) => {
      this.msg="login successfully"  
      this.accessToken = res.body;
      this.dataService.putAuthentication(true);
      this.router.navigate(['/dashboard']);     
     },
    (err) => {
      if (err.body.code === 'NotAuthorizedException') {
        this.errorCode=err.message;
        console.log(this.errorCode);
      }
    }
    ); 
  }

}
