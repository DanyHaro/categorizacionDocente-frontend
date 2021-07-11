import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Premio } from 'src/app/Models/premio';
import { Proyeccion } from 'src/app/Models/proyeccion';
import { Subfactor } from 'src/app/Models/subfactor';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import Swal from 'sweetalert2';
import { ModaldialogComponent } from '../../modaldialog/modaldialog.component';

@Component({
  selector: 'app-proyeccion-social',
  templateUrl: './proyeccion-social.component.html',
  styleUrls: ['./proyeccion-social.component.css']
})
export class ProyeccionSocialComponent implements OnInit {

  form;
  archivo:File;
  subfactores:Subfactor[];
  dataSource = null;
  displayedColumns: string[] = ['evento',  'Fecha', 'tipo','foto'];
   @ViewChild (MatPaginator, {static: true}) paginador: MatPaginator;
    
  iddocente:number;
  proyecciones:Proyeccion[]=[]
  proyeccion:Proyeccion = new Proyeccion();
  constructor(private router: Router, private service:PersonaService,private formBuilder: FormBuilder,public dialog: MatDialog) {
    this.form = formBuilder.group({
      nombreeven:new FormControl('', []),
      fecha:new FormControl('', []),
      idsubfactor: new FormControl('',[]),
     
     
      foto:new FormControl('',[Validators.required]),
    });
   }

  ngOnInit(): void {
    this.iddocente = Number(localStorage.getItem('iddocente'));
    this.obteneraprot();
    this.service.getsubfactor(26).subscribe(
      (data)=>{this.subfactores = data}
    )
  
  }
  mostrar(event){
      this.archivo = event.target.files[0];
  }
  enviar(){
    this.form.disable();
    this.proyeccion=this.form.value;
   
    this.proyeccion.foto=this.archivo.name;
    this.proyeccion.iddocente=this.iddocente
    console.log(this.proyeccion);
    this.service.crearproyeccion(this.proyeccion).subscribe(
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
  obteneraprot(){
    this.service.getproyeccion(this.iddocente).subscribe(
      data=>{this.proyecciones=data;
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
