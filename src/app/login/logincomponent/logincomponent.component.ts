import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  options: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));

  constructor(private router:Router, fb: FormBuilder) {
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });

  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }

  ngOnInit(): void {
  }

  iniciarsesion(){
    this.router.navigateByUrl('/cards');
  }

}
