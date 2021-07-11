import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { Grado } from 'src/app/Models/grados';
import { Pais } from 'src/app/Models/pais';
import { Subfactor } from 'src/app/Models/subfactor';
import { Universidad } from 'src/app/Models/universidad';
import { GradoService } from 'src/app/services/grado/grado.service';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import { SubfactorService } from 'src/app/services/subfactor/subfactor.service';
import { UnipaisService } from 'src/app/services/unipais/unipais.service';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent implements OnInit {
  
  
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  
  element_datos: Grado[] = [];
  paises: Pais[] = []
  universidades: Universidad[] = [];
  subfactorArray: Subfactor[] = [];
  foto: File
  gradoObjeto: Grado = new Grado();
  // idusuarioForParam;
  myId = uuidv4();
  imgCodified: string;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  var_id;
  pageSlice

  form;
  constructor(fb: FormBuilder, private loginservice:LoginService,private gradoservice: GradoService, private personaservice: PersonaService, private formBuilder: FormBuilder, private unipaisservice: UnipaisService, private subfactorservice: SubfactorService, private rutaactivada: ActivatedRoute) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });

    
    

    //OBTENIENDO DEL LOCALSTORAGE
    this.var_id = this.loginservice.getInformation()
    this.gradoObjeto.idusuario = parseInt(this.var_id)

    this.form = formBuilder.group({
      especialidad: new FormControl('', [Validators.required]),
      horas: new FormControl('', [Validators.required]),
      years: new FormControl('', [Validators.required]),
      iduniversidad: new FormControl('', [Validators.required]),
      idsubfactor: new FormControl('', [Validators.required]),
      archivo: new FormControl('', [Validators.required]),
      sunedu: new FormControl('', [Validators.required]),
      f_obtencion: new FormControl('', [Validators.required]),
      idusuario: new FormControl(this.gradoObjeto.idusuario),

      
    });

  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }

  onPageChange(evento: PageEvent){
    console.log(evento,"EVENTO");
    
    const startIndex = evento.pageIndex * evento.pageSize;
    let endIndex = startIndex + evento.pageSize;
    if (endIndex > this.element_datos.length) {
      endIndex = this.element_datos.length;
    }
    this.pageSlice = this.element_datos.slice(startIndex, endIndex);
  }

  ngOnInit(): void {

    //OBTENIENDO LA LISTA DE PAISES PARA EL SELECT OPTION
    this.unipaisservice.getAllpaises().subscribe(data => {
      console.log(data);
      this.paises = data;
    });

    //LISTANDO TODOS LOS GRADOS SEGUN EL USUARIO
    this.gradoservice.getOnegrado(this.gradoObjeto.idusuario).subscribe(gradoOfuser=>{
      this.element_datos = gradoOfuser;
      console.log(this.element_datos,"LISTA DE LEGAJOS");

      this.pageSlice= this.element_datos.slice(0,5)
      console.log(this.pageSlice,"PAGINATOR DE MRD");
    })
    console.log(this.var_id,"LOCAL STORAGE");

    

    //OBTENIENDO ID DEL USUARIO LOGUEADO
    // this.rutaactivada.params.subscribe(parametroUsuario => {
    //   console.log(parametroUsuario,"Sin corchetes");
    //   console.log(parseInt(parametroUsuario['idusu']));
      
    //   this.gradoservice.getOnegrado(parseInt(parametroUsuario['id'])).subscribe(gradosOfuser=>{
    //     console.log(gradosOfuser,"Los grados del usuario logueado");
        
    //   })
      
    // })


    //OBTENIENDO EL ID DE FACTOR PARA MOSTRAR EN EL SELECT OPTION LOS SUBFACTORES DE ACUERDO AL FACTOR SELECIONADO
    this.rutaactivada.params.subscribe(parametroFactor => {
      this.subfactorservice.getGroupSubfactor(parametroFactor['id']).subscribe(subfactores => {
        console.log(subfactores, "WE ARE THE CHAMPIONS");
        this.subfactorArray = subfactores;

      })
    })
    
  }



  paisSeleccionado(idpais: number) {

    //OBTENIENDO LAS UNIVERSIDADES DE ACUERDO AL PAIS SELECIONADO
    this.unipaisservice.getGroupUniversidad(idpais).subscribe(grupo => {
      console.log(grupo, "GRUPO DE UNIS");
      this.universidades = grupo;
    })

  }


  //GUARDANDO LEGAJO
  guardarLegajo() {
    console.log(this.form, "formulario !");

    console.log(this.foto,"SOY EL ARCHIVO");
    if (this.form.valid) {
      
      
      let rango = this.foto.name.split('.')
      let ext = rango[rango.length - 1];
      let nombrenuevo = this.myId + '.' + ext;
      this.myId = uuidv4();
      //
      
      this.gradoObjeto = this.form.value;
      this.gradoObjeto.archivo = nombrenuevo;
      this.gradoservice.createGrado(this.gradoObjeto).subscribe(data => {

        console.log(data, "ESTE GRADO A SIDO INGRESADO");
        this.personaservice.guardarimagen(this.foto, this.gradoObjeto.archivo);
        Swal.fire({
          icon: 'success',
          title: 'GUARDADO CORRECTAMENTE.',
          // text: 'Estado de solicitud',
        });
        this.ngOnInit();

        

      })
    } else {
      console.log("NO SE HA ENVIADO");
    }
    
  }
  

  mostrar(event) {
    this.foto = event.target.files[0];
    var supportedImages = ["image/jpeg", "image/png", "image/gif"];
    var seEncontraronElementoNoValidos = false;
  
    if (supportedImages.indexOf(this.foto.type) != -1) {
      this.imgCodified = URL.createObjectURL(this.foto);
      var doc = document.getElementById('preview')
      doc.innerHTML=`<img src="${this.imgCodified}" alt="Foto del usuario" width="100%" heigth="100%">`
    }
    else {
      seEncontraronElementoNoValidos = true;
    }
  };

}


// export interface GradoInterface {
//   idgrado:number;
//   idsubfactor:number;
//   iduniversidad:number;
//   especialidad:string;
//   horas:number;
//   f_obtencion:Date;
//   sunedu:boolean;
//   archivo:string;
//   idusuario:number;
//   years:number;
//   nota:number;
// }
