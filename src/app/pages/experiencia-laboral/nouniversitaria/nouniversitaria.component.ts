import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-nouniversitaria',
  templateUrl: './nouniversitaria.component.html',
  styleUrls: ['./nouniversitaria.component.css'],
})
export class NouniversitariaComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }
  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }

  ngOnInit(): void {}
}
