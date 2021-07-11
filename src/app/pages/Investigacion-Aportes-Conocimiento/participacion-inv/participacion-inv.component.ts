import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AportesLogros } from 'src/app/Models/aporteslogros';
import { Participacion_inv } from 'src/app/Models/participacion_inv';
import { Subfactor } from 'src/app/Models/subfactor';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import Swal from 'sweetalert2';
import { ModaldialogComponent } from '../../modaldialog/modaldialog.component';

@Component({
  selector: 'app-participacion-inv',
  templateUrl: './participacion-inv.component.html',
  styleUrls: ['./participacion-inv.component.css']
})
export class ParticipacionInvComponent implements OnInit {
  form;
  archivo:File;
  iddocente:number;
  subfactores:Subfactor[];
  participacion_inv:Participacion_inv= new Participacion_inv();
  dataSource = null;
  displayedColumns: string[] = ['año',  'titulo','linea_invest','rol','f_inicio','tipo','foto'];
  participaciones:Participacion_inv[]=[]
   @ViewChild (MatPaginator, {static: true}) paginador: MatPaginator;
  constructor(private router: Router, private service:PersonaService,private formBuilder: FormBuilder,public dialog: MatDialog) {
    this.form = formBuilder.group({
      idsubfactor: new FormControl('',[]),
      ano: new FormControl('',[]),
      titulo:new FormControl('', []),
      linea_invest:new FormControl('', []),
      rol: new FormControl('',[]),
      f_inicio:new FormControl('',[]),

      foto:new FormControl('',[Validators.required]),
     
    });
   }

  ngOnInit(): void {
    this.iddocente = Number(localStorage.getItem('iddocente'));
    this.obteneraprot();
    this.service.getsubfactor(24).subscribe(
      (data)=>{this.subfactores = data}
    )
  }
  mostrar(event){
      this.archivo = event.target.files[0];
  }
  enviar(){
    this.form.disable();
    this.participacion_inv=this.form.value;
    this.participacion_inv.iddocente=this.iddocente;
    this.participacion_inv.foto=this.archivo.name;
    console.log(this.participacion_inv);
    this.service.crearparticipacion_inv(this.participacion_inv).subscribe(
      data=>{
        this.service.guardarimagen(this.archivo,this.archivo.name);
        console.log(data)
        Swal.fire({
        icon: 'success',
        title: 'ESTADO.',
        text: 'SE REGISTRO CON EXITO.',
      
      });
      this.form.reset();
      this.form.enable();
      this.obteneraprot();

      }
      
    )
    
    
  }
  obteneraprot(){
    this.service.getparticipacion_inv(this.iddocente).subscribe(
      data=>{this.participaciones=data;
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginador;
       }
    )
    
  }
  openDialog(foto) {
    this.dialog.open(ModaldialogComponent, {
      data: {
        foto: foto
      }
    });
  }
  
}
