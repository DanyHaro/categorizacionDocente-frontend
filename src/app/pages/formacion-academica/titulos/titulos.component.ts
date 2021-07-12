import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { Grado } from 'src/app/Models/grados';
import { Pais } from 'src/app/Models/pais';
import { Subfactor } from 'src/app/Models/subfactor';
import { Titulo } from 'src/app/Models/titulo';
import { Universidad } from 'src/app/Models/universidad';
import { GradoService } from 'src/app/services/grado/grado.service';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import { SubfactorService } from 'src/app/services/subfactor/subfactor.service';
import { UnipaisService } from 'src/app/services/unipais/unipais.service';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { ModaldialogComponent } from '../../modaldialog/modaldialog.component';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {
  myId = uuidv4();
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  
  element_datos: Titulo[] = [];
  paises: Pais[] = []
  titulo:Titulo= new Titulo();
  universidades: Universidad[] = [];
  subfactorArray: Subfactor[] = [];
  foto: File
  dataSource = null;
  @ViewChild(MatPaginator, { static: true }) paginador: MatPaginator;
  displayedColumns: string[] = [
    'n',
  'TIPO',
  'UNIVERSIDAD',
  'ESPECIALIDAD',  'HORAS','CREDITOS',
  'F.OBTENCIÓN',
  'SUNEDU',
  'AÑOS',
  'ARCHIVO'
];
  

  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  var_id;
  pageSlice
iddocente;
  form;
  constructor(fb: FormBuilder,public dialog: MatDialog,  private loginservice:LoginService,private gradoservice: GradoService, private personaservice: PersonaService, private formBuilder: FormBuilder, private unipaisservice: UnipaisService, private subfactorservice: SubfactorService, private rutaactivada: ActivatedRoute) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });


    
    


this.form = formBuilder.group({
      
      especialidad: new FormControl('', [Validators.required]),
      horas: new FormControl('', [Validators.required]),
      years: new FormControl('', [Validators.required]),
      iduniversidad: new FormControl('', [Validators.required]),
      idsubfactor: new FormControl('', [Validators.required]),
      archivo: new FormControl('', [Validators.required]),
      sunedu: new FormControl('', [Validators.required]),
      f_obtencion: new FormControl('', [Validators.required]),
      creditos: new FormControl('', [Validators.required]),

     
    });

    
  }
 

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }


  obtenerdatos(){
    this.gradoservice.getOneTitulo(this.iddocente).subscribe(tituloOfuser=>{
      this.element_datos = tituloOfuser;
      this.dataSource = new MatTableDataSource<any>(tituloOfuser);
        this.dataSource.paginator = this.paginador;
    })
    
    
   

    
  }

  openDialog(foto) {
    this.dialog.open(ModaldialogComponent, {
      data: {
        foto: foto
      }
    });
  }


  ngOnInit(): void {
    this.iddocente = Number(localStorage.getItem('iddocente'));
    this.obtenerdatos();
    //OBTENIENDO LA LISTA DE PAISES PARA EL SELECT OPTION
    this.unipaisservice.getAllpaises().subscribe(data => {
      console.log(data);
      this.paises = data;
    });

    //LISTANDO TODOS LOS GRADOS SEGUN EL USUARIO
    
    

    

    //OBTENIENDO ID DEL USUARIO LOGUEADO
    // this.rutaactivada.params.subscribe(parametroUsuario => {
    //   console.log(parametroUsuario,"Sin corchetes");
    //   console.log(parseInt(parametroUsuario['idusu']));
      
    //   this.gradoservice.getOnegrado(parseInt(parametroUsuario['id'])).subscribe(gradosOfuser=>{
    //     console.log(gradosOfuser,"Los grados del usuario logueado");
        
    //   })
      
    // })


    //OBTENIENDO EL ID DE FACTOR PARA MOSTRAR EN EL SELECT OPTION LOS SUBFACTORES DE ACUERDO AL FACTOR SELECIONADO
    // this.rutaactivada.params.subscribe(parametroFactor => {
    //   this.subfactorservice.getGroupSubfactor(parametroFactor['id']).subscribe(subfactores => {
    //     console.log(subfactores, "WE ARE THE CHAMPIONS");
    //     this.subfactorArray = subfactores;

    //   })
    // })

    
    this.personaservice.getsubfactor(1).subscribe(subfactores=>{
      this.subfactorArray = subfactores
      console.log(this.subfactorArray,"CTMRE !!");
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
      
      this.form.disable();
      let rango = this.foto.name.split('.')
      let ext = rango[rango.length - 1];
      let nombrenuevo = this.myId + '.' + ext;
      this.myId = uuidv4();
      //
      
      this.titulo = this.form.value;
      this.titulo.archivo = nombrenuevo;
      this.titulo.iddocente=this.iddocente;
      this.gradoservice.createTitulo(this.titulo).subscribe(data => {

        console.log(data, "ESTE GRADO A SIDO INGRESADO");
        this.personaservice.guardarimagen(this.foto,nombrenuevo);

        Swal.fire({
          icon: 'success',
          title: 'GUARDADO CORRECTAMENTE.',
          // text: 'Estado de solicitud',
        });
        this.form.reset();
        this.form.enable();
        
        this.obtenerdatos();

        

      })
    } else {
      console.log("NO SE HA ENVIADO");
    }
    
  }
  mostrar(event) {
    this.foto = event.target.files[0];
  }

}
