import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent implements OnInit {
  isLinear: false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    private _formBuilder: FormBuilder,
    private storage: AngularFireStorage
  ) {}

  onUpload(event) {
    const file = event.target.files[0];
    const filePath = `vaucher/profile_{$id}`;
    const task = this.storage.upload(filePath, file);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
