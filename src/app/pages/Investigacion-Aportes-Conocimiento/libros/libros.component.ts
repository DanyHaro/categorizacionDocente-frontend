import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Libro } from 'src/app/Models/libro';
import { Subfactor } from 'src/app/Models/subfactor';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import Swal from 'sweetalert2';
import { ModaldialogComponent } from '../../modaldialog/modaldialog.component';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  form;
  archivo:File;
  subfactores:Subfactor[];
  iddocente:number;
  libro:Libro = new Libro();
  dataSource = null;
  displayedColumns: string[] = ['año', 'titulo','rol','editorial','tipo','foto'];
  libros:Libro[]=[]
   @ViewChild (MatPaginator, {static: true}) paginador: MatPaginator;
  constructor(private router: Router, private service:PersonaService,private formBuilder: FormBuilder,public dialog: MatDialog) {
    this.form = formBuilder.group({
      ano:new FormControl('', []),
      titulo:new FormControl('', []),
      idsubfactor: new FormControl('',[]),
      rol:new FormControl('',[]),
      editorial:new FormControl('',[]),
      foto:new FormControl('',[Validators.required]),
    });
   }

  ngOnInit(): void {
    this.iddocente = Number(localStorage.getItem('iddocente'));
    this.obteneraprot();
    this.service.getsubfactor(23).subscribe(
      (data)=>{this.subfactores = data}
    )
  }
  mostrar(event){
      this.archivo = event.target.files[0];
  }
  enviar(){
    this.form.disable();
    this.libro=this.form.value;
    this.libro.iddocente=this.iddocente
    this.libro.foto=this.archivo.name;
    console.log(this.libro);
    this.service.crearlibro(this.libro).subscribe(
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
    this.service.getlibros(this.iddocente).subscribe(
      data=>{this.libros=data;
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
