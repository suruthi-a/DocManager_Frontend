import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit   {
  isAuthenticated:boolean;
  constructor(private dataService: DataService) { 
    this.isAuthenticated = false;
  }
  
  ngOnInit(): void {
    console.log("hello from header");
    this.isAuthenticated=this.dataService.getAuthentication();
  }
 
}
