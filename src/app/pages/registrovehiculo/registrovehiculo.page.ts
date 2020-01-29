import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrovehiculo',
  templateUrl: './registrovehiculo.page.html',
  styleUrls: ['./registrovehiculo.page.scss'],
})
export class RegistrovehiculoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pantallaHome(){
    this.router.navigate(['/home/map']);
  }

}
