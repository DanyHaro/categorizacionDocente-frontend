import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AportesLogros } from 'src/app/Models/aporteslogros';
import { Asesoria } from 'src/app/Models/asesoria';
import { Categoria } from 'src/app/Models/categoria';
import { Docente } from 'src/app/Models/docente';
import { Factor } from 'src/app/Models/factor';
import { Grado } from 'src/app/Models/grados';
import { Items } from 'src/app/Models/items';
import { Libro } from 'src/app/Models/libro';
import { Participacion_inv } from 'src/app/Models/participacion_inv';
import { Premio } from 'src/app/Models/premio';
import { Proyeccion } from 'src/app/Models/proyeccion';
import { Publicacion_inv } from 'src/app/Models/publicacion_inv';
import { GradoService } from 'src/app/services/grado/grado.service';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  iddocente:number;
  docente:any;
  asesorias:Asesoria[];
  libros:Libro[]
  idfactor:number;
  premios:Premio[];
  aportes:AportesLogros[]
  grados:Grado[];
  proyecciones:Proyeccion[];
  participaciones:Participacion_inv[];
  publicaciones:Publicacion_inv[];
  items:Items[];
  factores:Factor[];
  nota:number=0;
  categorias:Categoria[];
  constructor(private route: ActivatedRoute,private service:PersonaService,private servicegrade:GradoService) { }
     //Se obtienen los items  y el id del docente
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.iddocente= params['n'];
    
      console.log(params)
  });
this.service.obtenerdocente(this.iddocente).subscribe(
  data=>{
    this.docente=data[0];
    console.log(data)
  }
)
   
  this.service.getitems().subscribe(
    data=>{this.items =data  })
    console.log()
  }
  
    //Se obtienen los factores segun el id del item
    mostrarfactor(id:number){
     console.log(id)
     this.service.getfactor(id).subscribe(
       data=>{this.factores= data })
    }

    mostrardet(idfactor:number){
      this.idfactor=idfactor;
      this.importardata(idfactor)
    }
    cerrar(){
      this.idfactor=0;
    }
    importardata(idfactor){
      console.log(this.iddocente)
      switch (idfactor) {
        case 27:this.service.getpremios(this.iddocente).subscribe(
          data=>{
            this.premios=data.map(
              data2=>{
                this.service.mostrarimagenfirebase(data2.foto).subscribe(
                fot=>{
                  data2.tipo=this.revisarfoto(fot);
                  data2.foto=fot
                }
              );
              return data2;
            })})
         break;
        case 28:this.service.getaportes(this.iddocente).subscribe(
          data=>{
            this.aportes=data.map(
              data2=>{
                this.service.mostrarimagenfirebase(data2.foto).subscribe(
                  fot=>{
                    data2.tipo=this.revisarfoto(fot);
                  data2.foto=fot
                   }   
              );
              return data2;
            })})
         break;
        case 25:this.service.getasesoria(this.iddocente).subscribe(
          data=>{
            this.asesorias=data.map(
              data2=>{
                this.service.mostrarimagenfirebase(data2.foto).subscribe(
                fot=>{
                  data2.tipo=this.revisarfoto(fot);
                  data2.foto=fot}
              );
              return data2;
            })})
         break;
         case 23:this.service.getlibros(this.iddocente).subscribe(
          data=>{
            this.libros=data.map(
              data2=>{
                this.service.mostrarimagenfirebase(data2.foto).subscribe(
                fot=>{
                  data2.tipo=this.revisarfoto(fot);
                  data2.foto=fot }
              );
              return data2;
            })})
         break;
         case 26:this.service.getproyeccion(this.iddocente).subscribe(
          data=>{
            this.proyecciones=data.map(
              data2=>{
                this.service.mostrarimagenfirebase(data2.foto).subscribe(
                fot=>{
                  data2.tipo=this.revisarfoto(fot);
                  data2.foto=fot
                }
              );
              return data2;
            })})
         break;
         case 24:this.service.getparticipacion_inv(this.iddocente).subscribe(
          data=>{
            this.participaciones=data.map(
              data2=>{
                this.service.mostrarimagenfirebase(data2.foto).subscribe(
                fot=>{
                  data2.tipo=this.revisarfoto(fot);
                  data2.foto=fot
                }
              );
              return data2;
            })})
         break;
         case 22:this.service.getpublicacion_inv(this.iddocente).subscribe(
          data=>{
            this.publicaciones=data.map(
              data2=>{
                this.service.mostrarimagenfirebase(data2.foto).subscribe(
                fot=>{
                  data2.tipo=this.revisarfoto(fot);
                  data2.foto=fot
                }
              );
              return data2;
            })})
         break;
        
         case 1:this.servicegrade.getOnegrado(this.iddocente).subscribe(
          data=>{
            this.grados=data.map(
              data2=>{
                this.service.mostrarimagenfirebase(data2.archivo).subscribe(
                fot=>{
                  data2.type=this.revisarfoto(fot);
                  data2.archivo=fot
                }
              );
              return data2;
            })})
         break;
         default:
          break;
      }
    }
  
    modificar(grado){
      Swal.fire({
        title: 'Esta seguro de modificar la nota?',
        text: "Confirme!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Modificar!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.servicegrade.updategrado(grado,this.nota).subscribe(data=>{

            Swal.fire(
              'Modificado con exito!',
              data,
              'success'
            )
          }
          )
          
        }
      })
      
    }

    revisarfoto(foto:string):boolean{
      if(foto.toLowerCase().indexOf('jfif') >= 0 ||foto.toLowerCase().indexOf('jpg') >= 0 || foto.toLowerCase().indexOf('png') >= 0){
        return true;
      }else{
        return false; 
      }
    }
    getRxcui(event){
this.nota=event.target.value
    }

}
