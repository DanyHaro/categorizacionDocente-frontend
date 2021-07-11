import { NumberSymbol } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AportesLogros } from 'src/app/Models/aporteslogros';
import { Pais } from 'src/app/Models/pais';
import { Subfactor } from 'src/app/Models/subfactor';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import Swal from 'sweetalert2';
import { ModaldialogComponent } from '../../modaldialog/modaldialog.component';

@Component({
  selector: 'app-aportes-logros',
  templateUrl: './aportes-logros.component.html',
  styleUrls: ['./aportes-logros.component.css']
})
export class AportesLogrosComponent implements OnInit {
iddocente:number;
  form;
  archivo:File;
  dataSource = null;

  paises:Pais[];
  subfactores:Subfactor[];
  aportes:AportesLogros[]=[];
  aporte:AportesLogros= new AportesLogros();


  displayedColumns: string[] = ['Institucion', 'Pais', 'Fecha', 'Tipo','Detalle','foto'];
  constructor(private router: Router, private service:PersonaService,private formBuilder: FormBuilder,public dialog: MatDialog) {
    this.form = formBuilder.group({
      institucion:new FormControl('', []),
      pais:new FormControl('', []),
      idsubfactor: new FormControl('',[]),
      fecha:new FormControl('',[]),
      detalle:new FormControl('',[]),
      foto:new FormControl('',[Validators.required]),
    });
   }
   
   @ViewChild (MatPaginator, {static: true}) paginador: MatPaginator;
  
  ngOnInit(): void {
    this.iddocente = Number(localStorage.getItem('iddocente'));
    this.obteneraprot();
  
    this.service.getPaises().subscribe(
      data=>{
this.paises=data
      }
    )
    this.service.getsubfactor(28).subscribe(
      (data)=>{this.subfactores = data}
    )
   
  }
  mostrar(event){
      this.archivo = event.target.files[0];
  }
  obteneraprot(){
    this.service.getaportes(this.iddocente).subscribe(
      data=>{this.aportes=data;
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginador;
       }
    )
    
  }
  enviar(){
    this.form.disable();
    this.aporte=this.form.value;
    this.aporte.iddocente=this.iddocente;
    this.aporte.foto=this.archivo.name;
    console.log(this.aporte);
    this.service.crearaporte(this.aporte).subscribe(
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
      this.obteneraprot();
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
