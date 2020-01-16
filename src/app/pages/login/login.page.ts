import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:string;
  pass:string;
  constructor( private router: Router) { }

  ngOnInit() {
    this.user="";
    this.pass="";
  }
  login(){
   
    if( this.user==="admin" && this.pass==="a"){
      console.log('okay');
      this.router.navigate(['/home/map']);
    }else {
      console.log('celse');
    }
    
  }

}
