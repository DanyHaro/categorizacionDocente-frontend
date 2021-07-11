import { Component, OnInit } from '@angular/core';
import { ModeloComponent } from '../capacidad-docente/modelo/modelo.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { PersonaService } from 'src/app/services/Persona/persona.service';
@Component({
  selector: 'app-modaldialog',
  templateUrl: './modaldialog.component.html',
  styleUrls: ['./modaldialog.component.css']
})
export class ModaldialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModaldialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private service:PersonaService) {

  }
  foto:string;
  tipo:boolean =false;
  ngOnInit(): void {
  
    console.log(this.foto)
    this.service.mostrarimagenfirebase(this.data.foto).subscribe(
      data=>{
        console.log(data)
        if(data.toLowerCase().indexOf('jfif') >= 0 ||data.toLowerCase().indexOf('jpg') >= 0 || data.toLowerCase().indexOf('png') >= 0){
          this.foto=data
          this.tipo= true;
        }else{
          this.foto=data
        }
        console.log(this.tipo)
      }
    )
  
  }
 
}
