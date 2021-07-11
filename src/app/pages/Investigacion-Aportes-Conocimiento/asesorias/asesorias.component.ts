import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Asesoria } from 'src/app/Models/asesoria';
import { Subfactor } from 'src/app/Models/subfactor';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asesorias',
  templateUrl: './asesorias.component.html',
  styleUrls: ['./asesorias.component.css']
})
export class AsesoriasComponent implements OnInit {

  subfactores:Subfactor[];
  form;
  asesoria:Asesoria=new Asesoria();
  iddocente:number;
  archivo :File;
  constructor(private router: Router, private service:PersonaService,private formBuilder: FormBuilder) { 
    this.form = formBuilder.group({
      año:new FormControl('', []),
      nivel:new FormControl('', []),
      titulo:new FormControl('',[]),
      autor:new FormControl('',[]),
      especialidad:new FormControl('',[Validators.required]),
      resolucion:new FormControl('',[]),
      foto:new FormControl('',[]),
      idsubfactor: new FormControl('',[]),
    });
  }

  ngOnInit(): void {
    this.service.getsubfactor(25).subscribe(
      (data)=>{this.subfactores = data}
    )
    this.iddocente = Number(localStorage.getItem('iddocente'));
  }
  mostrar(event){
    this.archivo = event.target.files[0];
}
enviar(){
  this.form.disable();
  this.asesoria=this.form.value;
  this.asesoria.iddocente=this.iddocente;
  this.asesoria.foto=this.archivo.name;
  console.log(this.asesoria);
  this.service.crearasesoria(this.asesoria).subscribe(
    data=>{
      this.service.guardarimagen(this.archivo,this.archivo.name);
      console.log(data)
      Swal.fire({
      icon: 'success',
      title: 'ESTADO.',
      text: 'SE REGISTRO CON EXITO.',
    
    });
    this.form.reset();
    this.form.enable ()
    }
    
  )
  
  
}

}
