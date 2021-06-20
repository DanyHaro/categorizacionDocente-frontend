import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  iniciarsesion(){
    this.router.navigateByUrl('/cards');
  }

}
