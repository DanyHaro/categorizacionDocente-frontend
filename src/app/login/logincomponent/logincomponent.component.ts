import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';


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
    form;
  constructor(private router: Router, private service:PersonaService,private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      nombres:new FormControl('', []),
      apellidos: new FormControl('',[]),
      correo: new FormControl('',[Validators.required,Validators.email]),
      sexo :new FormControl('',[]),
      direccion :new FormControl('',[Validators.required]),
      idpais :new FormControl('',[]),
      dni :new FormControl('',[Validators.required,Validators.minLength(8)]),
      telefono :new FormControl('',[Validators.required,Validators.minLength(9)]),
      foto:new FormControl('',[Validators.required]),


 
    });
  }
  

  
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
    
      if (this.form.valid) {
        
        let rango = this.archivo.name.split('.') 
        let ext = rango[rango.length-1];
        let nombrenuevo = this.myId + '.' + ext;

        this.myId = uuidv4();
        this.persona = this.form.value;
        this.persona.foto = nombrenuevo;
        this.service.registrarpersona(this.persona).subscribe(
         (data)=>{ this.service.guardarimagen(this.archivo,this.persona.foto);
          Swal.fire({
            icon: 'success',
            title: 'Su solicitud esta siendo procesada, se le informara mediante su correo electronico.',
            text: 'Estado de solicitud',
         
          });
        
          },err=>{
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'Opps..',
              text: 'Algo salio mal, porfavor ingrese sus datos de nuevo.',
           
            });
          })

  
        
        console.log(this.persona)
        this.borrar();
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Opps..',
          text: `Se encontraron los siguientes errores ${this.form.errors}`,
       
        });
      }
      
      }
      borrar(){
   
        this.form.value = '';
        
        
      }
  
 
  
}
