import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/categoria';
import { Docente } from 'src/app/Models/docente';
import { Persona } from 'src/app/Models/Persona';
import { User } from 'src/app/Models/user';
import { PersonaService } from 'src/app/services/Persona/persona.service';

@Component({
  selector: 'app-gestiondocente',
  templateUrl: './gestiondocente.component.html',
  styleUrls: ['./gestiondocente.component.css']
})
export class GestiondocenteComponent implements OnInit {

  users:User[];
  tipocats=["nv","at"];
  usuario:User=new User();
  displayedColumns: string[] = ['nombres', 'apellidos', 'correo', 'dni','detalle'];
  docente:Docente=new Docente();
  detallepersona:Persona = new Persona();
  personas:Persona[];
  categorias:Categoria[];
  constructor( private service:PersonaService, private route:Router) { }

  ngOnInit(): void {
    this.service.allpeople('ES').subscribe(
      (data)=>{
        data.map(
          (item)=>{
            this.service.mostrarimagenfirebase(item.foto.trim()).subscribe(
              (foto)=>item.foto=foto
            ) ;
          }
        )
        this.personas = data as Persona[];
        console.log(this.personas)
      }
    )
    
    
  }

  verdetalle(element:Persona){
    this.detallepersona=element;
  }
  mostrar(){
    console.log(this.docente.estadocat)
  }
  
  
  
  navegar(element:Persona){
    console.log(element)
    this.route.navigate(['admin/home/gestion/modal2'], {queryParams: {n: element}});
  }

  
}
