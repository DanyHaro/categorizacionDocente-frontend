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
    this.service.allcategoria().subscribe(
      (data)=>{
          this.categorias=data as Categoria[];
          console.log(data)
      }
    )
    this.service.getusers().subscribe(
      (data)=>{
         this.users=data;
      }
    )
  }

  verdetalle(element:Persona){
    this.detallepersona=element;
  }
  mostrar(){
    console.log(this.docente.estadocat)
  }
  
  
  
  generaruser(){
    var nombre=this.detallepersona.nombres.split(' ')[0];
    var apellido= this.detallepersona.apellidos.split(' ')[0];
    var usuarioname=nombre+apellido,passwordname=nombre+apellido;
    var encontrado=null;
    var condicion=1;
    do {
      encontrado=this.users.find(
        user=>{ if(user.usuario == usuarioname.toLowerCase()){
          return true;
        } else{
          return null;
        }
      }
      )
      var num=Math.floor(Math.random()*101);
      if(encontrado != null){
        usuarioname = usuarioname.concat(num.toString());
      }else{
        condicion = 0;
      }
    } while (condicion==1);
      this.usuario.usuario=usuarioname.toLocaleLowerCase();
      this.usuario.password=passwordname.toLocaleLowerCase();
  }


  crearusuario(){
    this.docente.idpersona=this.detallepersona.idpersona;
    console.log(this.docente);
    console.log(this.usuario); 
    this.service.crearusuario(this.usuario,this.docente).subscribe(
      data=>{
        console.log(data)
      }
    )


    
  }

  eliminardata(){
    this.docente=new Docente();
    this.usuario=new User();
  }
  
}
