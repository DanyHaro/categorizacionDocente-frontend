import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';
import { Persona } from 'src/app/Models/Persona';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import { Pais } from 'src/app/Models/pais';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css'],
})
export class LogincomponentComponent implements OnInit {
  persona:Persona = new Persona();
   myId = uuidv4();
   paises:Pais[];
   archivo:File;
    imgCodified:string;
  constructor(private router: Router, private service:PersonaService) {}
  
  ngOnInit() {
      this.service.getPaises().subscribe(
        (data)=>{this.paises=data}
      )
  }
  
  


  
  iniciarsesion() {
    this.router.navigateByUrl('/cards');
  }
  mostrar(event){
    this.archivo = event.target.files[0];
    this.persona.foto=this.archivo.name;
    var supportedImages = ["image/jpeg", "image/png", "image/gif"];
    var seEncontraronElementoNoValidos = false;

        if (supportedImages.indexOf(this.archivo.type) != -1) {
           this.imgCodified = URL.createObjectURL(this.archivo);
          var doc= document.getElementById('preview')
          doc.innerHTML=`<img src="${this.imgCodified}" alt="Foto del usuario" width="100%" heigth="100%">` 
        }
        else {
            seEncontraronElementoNoValidos = true;
        }
    };

    enviarsolicitud(){
      let rango = this.persona.foto.split('.') 
      let ext = rango[rango.length-1];
      this.persona.foto = this.myId + '.' + ext;
      console.log(this.persona.foto)
      console.log(this.persona)
      this.myId = uuidv4();

      this.service.registrarpersona(this.persona).subscribe(
         (data)=>{ this.service.guardarimagen(this.archivo,this.persona.foto)
          })
  
      }
      borrar(){
        this.persona = new Persona();
        console.log(this.archivo)
      }
  
 
  
}
