import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AportesLogros } from 'src/app/Models/aporteslogros';
import { Asesoria } from 'src/app/Models/asesoria';
import { Categoria } from 'src/app/Models/categoria';
import { Docente } from 'src/app/Models/docente';
import { Factor } from 'src/app/Models/factor';
import { Items } from 'src/app/Models/items';
import { Libro } from 'src/app/Models/libro';
import { Premio } from 'src/app/Models/premio';
import { PersonaService } from 'src/app/services/Persona/persona.service';

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

  items:Items[];
  factores:Factor[];
  categorias:Categoria[];
  constructor(private route: ActivatedRoute,private service:PersonaService) { }
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
      
        default:
          break;
      }
    }
  

    revisarfoto(foto:string):boolean{
      if(foto.toLowerCase().indexOf('jfif') >= 0 ||foto.toLowerCase().indexOf('jpg') >= 0 || foto.toLowerCase().indexOf('png') >= 0){
        return true;
      }else{
        return false; 
      }
    }

}