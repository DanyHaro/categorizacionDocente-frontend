import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Capacitacion } from 'src/app/Models/capacitacion';
import { Premio } from 'src/app/Models/premio';
import { Subfactor } from 'src/app/Models/subfactor';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import Swal from 'sweetalert2';
import { ModaldialogComponent } from '../../modaldialog/modaldialog.component';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.css']
})
export class CapacitacionComponent implements OnInit {

  form;
  archivo:File;
  iddocente:number;
  dataSource = null;
  subfactores:Subfactor[];
  capacitacion:Capacitacion= new Capacitacion();
  capacitaciones:Capacitacion[]=[]
  displayedColumns: string[] = ['Titulo', 'Lugar', 'Organizadora', 'Tipo','Duracion','Horas/Cred.','foto'];
  @ViewChild (MatPaginator, {static: true}) paginador: MatPaginator;
  
  constructor(private router: Router, private service:PersonaService,private formBuilder: FormBuilder,public dialog: MatDialog) {
    this.form = formBuilder.group({
     
      titulo:new FormControl('', []),
      lugar:new FormControl('', []),
      organizadora:new FormControl('', []),
      idsubfactor: new FormControl('',[]),
      f_inicio:new FormControl('',[]),
      f_fin:new FormControl('',[]),
      foto:new FormControl('',[Validators.required]),
      horas:new FormControl('',[]),
      creditos:new FormControl('',[]),
    });
   }

  ngOnInit(): void {
    this.iddocente = Number(localStorage.getItem('iddocente'));
    this.service.getsubfactor(20).subscribe(
      (data)=>{this.subfactores = data}
    )
    this.obtenerregistros();
  
  }
  mostrar(event){
      this.archivo = event.target.files[0];
  }
  enviar(){
    this.form.disable();
    this.capacitacion=this.form.value;
    this.capacitacion.iddocente=this.iddocente;
    this.capacitacion.foto=this.archivo.name;
    console.log(this.capacitacion);
    this.service.crearcapacitacion(this.capacitacion).subscribe(
      data=>{
        this.service.guardarimagen(this.archivo,this.archivo.name);
        console.log(data)
        Swal.fire({
        icon: 'success',
        title: 'ESTADO.',
        text: 'SE REGISTRO CON EXITO.',
      
      });
      this.form.reset();
      this.form.enable ();
      this.obtenerregistros();
      }
      
    )
    
    
  }

  obtenerregistros(){
    this.service.getcapacitacioness(this.iddocente).subscribe(
      data=>{this.capacitaciones=data;
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
