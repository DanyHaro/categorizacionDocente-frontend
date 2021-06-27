import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.css'],
})
export class MetodoPagoComponent {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage) {}

  onUpload(event) {
    const file = event.target.files[0];
    const filePath = `vaucher/profile_{$id}`;
    const task = this.storage.upload(filePath, file);
  }
}
