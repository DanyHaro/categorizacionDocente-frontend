import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AportesLogros } from 'src/app/Models/aporteslogros';
import { Subfactor } from 'src/app/Models/subfactor';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aportes-logros',
  templateUrl: './aportes-logros.component.html',
  styleUrls: ['./aportes-logros.component.css']
})
export class AportesLogrosComponent implements OnInit {
iddocente:number;
  form;
  archivo:File;
  subfactores:Subfactor[];
  aporte:AportesLogros= new AportesLogros();
  constructor(private router: Router, private service:PersonaService,private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      institucion:new FormControl('', []),
      pais:new FormControl('', []),
      idsubfactor: new FormControl('',[]),
      fecha:new FormControl('',[]),
      detalle:new FormControl('',[]),
      foto:new FormControl('',[Validators.required]),
    });
   }

  ngOnInit(): void {
    this.service.getsubfactor(28).subscribe(
      (data)=>{this.subfactores = data}
    )
    this.iddocente = Number(localStorage.getItem('iddocente'));
  }
  mostrar(event){
      this.archivo = event.target.files[0];
  }
  enviar(){
    this.form.disable();
    this.aporte=this.form.value;
    this.aporte.iddocente=this.iddocente;
    this.aporte.foto=this.archivo.name;
    console.log(this.aporte);
    this.service.crearaporte(this.aporte).subscribe(
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
