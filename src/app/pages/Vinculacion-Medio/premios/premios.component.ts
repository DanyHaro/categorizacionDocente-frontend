import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Premio } from 'src/app/Models/premio';
import { Subfactor } from 'src/app/Models/subfactor';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.css']
})
export class PremiosComponent implements OnInit {

  form;
  archivo:File;
  subfactores:Subfactor[];
  premio:Premio = new Premio();
  iddocente:number;
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
    this.service.getsubfactor(27).subscribe(
      (data)=>{this.subfactores = data}
    )
    this.iddocente = Number(localStorage.getItem('iddocente'));
  }
  mostrar(event){
      this.archivo = event.target.files[0];
  }
  enviar(){
    this.form.disable();
    this.premio=this.form.value;
    this.premio.iddocente= this.iddocente
    this.premio.foto=this.archivo.name;
    console.log(this.premio);
    this.service.crearpremio(this.premio).subscribe(
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
