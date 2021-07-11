import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Capacitacion } from 'src/app/Models/capacitacion';
import { Premio } from 'src/app/Models/premio';
import { Subfactor } from 'src/app/Models/subfactor';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.css']
})
export class CapacitacionComponent implements OnInit {

  form;
  archivo:File;
  iddocente:number;
  subfactores:Subfactor[];
  capacitacion:Capacitacion= new Capacitacion();
  constructor(private router: Router, private service:PersonaService,private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
     
      titulo:new FormControl('', []),
      lugar:new FormControl('', []),
      organizadora:new FormControl('', []),
      idsubfactor: new FormControl('',[]),
      f_inicio:new FormControl('',[]),
      f_fin:new FormControl('',[]),
      foto:new FormControl('',[Validators.required]),
      horas:new FormControl('',[]),
      creditos:new FormControl('',[]),
    });
   }

  ngOnInit(): void {
    this.service.getsubfactor(20).subscribe(
      (data)=>{this.subfactores = data}
    )
    this.iddocente = Number(localStorage.getItem('iddocente'));
  }
  mostrar(event){
      this.archivo = event.target.files[0];
  }
  enviar(){
    this.form.disable();
    this.capacitacion=this.form.value;
    this.capacitacion.iddocente=this.iddocente;
    this.capacitacion.foto=this.archivo.name;
    console.log(this.capacitacion);
    this.service.crearcapacitacion(this.capacitacion).subscribe(
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
