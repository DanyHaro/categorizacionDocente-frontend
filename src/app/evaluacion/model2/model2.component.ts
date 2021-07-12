import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/Models/categoria';
import { Docente } from 'src/app/Models/docente';
import { Persona } from 'src/app/Models/Persona';
import { User } from 'src/app/Models/user';
import { PersonaService } from 'src/app/services/Persona/persona.service';

@Component({
  selector: 'app-model2',
  templateUrl: './model2.component.html',
  styleUrls: ['./model2.component.css']
})
export class Model2Component implements OnInit {
users:User[];
usuario:User=new User();
 docente:Docente=new Docente();
  personas:Persona[];
  
  detallepersona:Persona = new Persona();
categorias:Categoria[];
  constructor(private service:PersonaService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
  
  this.route.queryParams.subscribe(params => {
   
    
      console.log(params['n'])
  });
    this.service.getusers().subscribe(
      (data)=>{
         this.users=data;
      }
    )
    this.service.allcategoria().subscribe(
      (data)=>{
          this.categorias=data as Categoria[];
          console.log(data)
      }
    )
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
