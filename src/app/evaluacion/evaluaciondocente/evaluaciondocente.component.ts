import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { AportesLogros } from 'src/app/Models/aporteslogros';
import { Asesoria } from 'src/app/Models/asesoria';
import { Categoria } from 'src/app/Models/categoria';
import { Docente } from 'src/app/Models/docente';
import { Factor } from 'src/app/Models/factor';
import { Items } from 'src/app/Models/items';
import { Libro } from 'src/app/Models/libro';
import { Premio } from 'src/app/Models/premio';
import { PersonaService } from 'src/app/services/Persona/persona.service';

@Component({
  selector: 'app-evaluaciondocente',
  templateUrl: './evaluaciondocente.component.html',
  styleUrls: ['./evaluaciondocente.component.css']
})
export class EvaluaciondocenteComponent implements OnInit {
  dataSource = null;
  @ViewChild (MatPaginator, {static: true}) paginador: MatPaginator;
 
  displayedColumns: string[] = ['nombres', 'apellidos', 'correo', 'dni','detalle'];
  
  docentes:any[];
  
  constructor( private service:PersonaService, private route:Router) { }

  ngOnInit(): void {
    this.service.getdocentes().subscribe(
      data=>{
        this.docentes=data;
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginador;
      }
    )
    
  }
  navegar(element){
    console.log(element)
    this.route.navigate(['admin/home/gestion/modal'], {queryParams: {n: element}});
  }



  //Se obtienen el idtotalevaluacion y tambien todos los items
 
    
}
