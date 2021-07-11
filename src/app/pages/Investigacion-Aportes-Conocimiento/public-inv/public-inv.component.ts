import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AportesLogros } from 'src/app/Models/aporteslogros';
import { Publicacion_inv } from 'src/app/Models/publicacion_inv';
import { Subfactor } from 'src/app/Models/subfactor';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import Swal from 'sweetalert2';
import { ModaldialogComponent } from '../../modaldialog/modaldialog.component';

@Component({
  selector: 'app-public-inv',
  templateUrl: './public-inv.component.html',
  styleUrls: ['./public-inv.component.css']
})
export class PublicInvComponent implements OnInit {

  form;
  archivo:File;
  iddocente:number
  subfactores:Subfactor[];
  public_inv:Publicacion_inv= new Publicacion_inv();
  dataSource = null;
  displayedColumns: string[] = ['titulo','pais','ano','url','paginas','tipo','foto'];
  publicaciones:Publicacion_inv[]=[]
   @ViewChild (MatPaginator, {static: true}) paginador: MatPaginator;
  constructor(private router: Router, private service:PersonaService,private formBuilder: FormBuilder,public dialog: MatDialog) {
    this.form = formBuilder.group({
      titulo:new FormControl('', []),
      pais:new FormControl('', []),
      idsubfactor: new FormControl('',[]),
      ano:new FormControl('',[]),
      url:new FormControl('',[]),
      paginas:new FormControl('',[]),
      foto:new FormControl('',[Validators.required]),
    });
   }

  ngOnInit(): void {
    this.iddocente = Number(localStorage.getItem('iddocente'));
    this.obteneraprot();
    this.service.getsubfactor(22).subscribe(
      (data)=>{this.subfactores = data}
    )
    
  }
  mostrar(event){
      this.archivo = event.target.files[0];
  }
  enviar(){
    this.form.disable();
    this.public_inv=this.form.value;
    this.public_inv.iddocente=this.iddocente;
    this.public_inv.foto=this.archivo.name;
    console.log(this.public_inv);
    this.service.crearpublicacion_inv(this.public_inv).subscribe(
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
    this.service.getpublicacion_inv(this.iddocente).subscribe(
      data=>{this.publicaciones=data;
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
