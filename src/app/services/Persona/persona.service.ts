import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AportesLogros } from 'src/app/Models/aporteslogros';
import { Asesoria } from 'src/app/Models/asesoria';
import { Capacitacion } from 'src/app/Models/capacitacion';
import { Categoria } from 'src/app/Models/categoria';
import { Docente } from 'src/app/Models/docente';
import { Factor } from 'src/app/Models/factor';
import { Items } from 'src/app/Models/items';
import { Libro } from 'src/app/Models/libro';
import { Pais } from 'src/app/Models/pais';
import { Participacion_inv } from 'src/app/Models/participacion_inv';
import { Persona } from 'src/app/Models/Persona';
import { Premio } from 'src/app/Models/premio';
import { Proyeccion } from 'src/app/Models/proyeccion';
import { Publicacion_inv } from 'src/app/Models/publicacion_inv';
import { Subfactor } from 'src/app/Models/subfactor';
import { User } from 'src/app/Models/user';
import { AsesoriasComponent } from 'src/app/pages/Investigacion-Aportes-Conocimiento/asesorias/asesorias.component';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(public http:HttpClient,private firebase:AngularFireStorage) { }

   ruta ='http://localhost:5050/persona'
   ruta2 ='http://localhost:5050/legajo'
   ///// Personas
  getPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.ruta + '/getpais');
  }
 registrarpersona(persona:Persona):Observable<Persona>{
  return this.http.post<Persona>(this.ruta+ '/postpersona',persona);
  }
  allpeople(estado : string):Observable<Persona[]>{
    return this.http.get<Persona[]>(this.ruta +  '/allpersona/'+ estado);
}
getitems():Observable<Items[]>{
  return this.http.get<Items[]>(this.ruta + '/getitem');
}
getfactor(id:number):Observable<Factor[]>{
  return this.http.get<Factor[]>(this.ruta + '/getfactor/' + id);

}

////// Users

allcategoria():Observable<Categoria[]>{
 return this.http.get<Categoria[]>(this.ruta + '/getcat')
}
getusers():Observable<User[]>{
 return this.http.get<User[]>(this.ruta + '/getusers' )
}
crearusuario(usuario:User,docente:Docente):Observable<string>{

 
 return this.http.post<string>(this.ruta + '/postuser',{'usuario':usuario , 'docente':docente});

}
////// Guardar imagenes y mostrar
guardarimagen(imagen : File,name:string):string{
  
  const filePath = imagen.name;
   const task = this.firebase.upload(`img/${name}`, imagen);
   return "imagen subida con exito";
}

mostrarimagenfirebase(nombre:string):Observable<string>{
  
  const ref = this.firebase.ref(`img/${nombre}`);
  console.log(nombre)
  return ref.getDownloadURL();
}
obtenerdocente(iddocente):Observable<Docente>{
  return this.http.get<Docente>(this.ruta + '/getdocente/' + iddocente);

}

////// Servicios de Legajos

getsubfactor(idfactor):Observable<Subfactor[]>{
  return this.http.get<Subfactor[]>(this.ruta + '/getsub/' + idfactor);

}
crearaporte(aporte:AportesLogros):Observable<string>{
 

  return this.http.post<string>(this.ruta2 + '/aportes',{aporte:aporte})

}

getpremios(iddocente):Observable<Premio[]>{
  return this.http.get<Premio[]>(this.ruta2 + '/getpremio/' + iddocente);

}
crearpremio(premio:Premio):Observable<string>{

  return this.http.post<string>(this.ruta2 + '/premios',{premio:premio})

}

crearasesoria(asesoria:Asesoria):Observable<string>{

  return this.http.post<string>(this.ruta2 + '/asesoria',{asesoria:asesoria})

}

getasesoria(iddocente):Observable<Asesoria[]>{
  return this.http.get<Asesoria[]>(this.ruta2 + '/getasesoria/' + iddocente);

}

crearlibro(libros:Libro):Observable<string>{

  return this.http.post<string>(this.ruta2 + '/libro',{libros:libros})

}

getlibros(iddocente):Observable<Libro[]>{
  return this.http.get<Libro[]>(this.ruta2 + '/getlibro/' + iddocente);

}

crearcapacitacion(capacitacion:Capacitacion):Observable<string>{
  
  return this.http.post<string>(this.ruta2 + '/capacitacion',{capacitacion:capacitacion})

}

getcapacitacioness(iddocente):Observable<Capacitacion[]>{
  return this.http.get<Capacitacion[]>(this.ruta2 + '/getcapacitacion/' + iddocente);

}

crearpublicacion_inv(publicacion_inv:Publicacion_inv):Observable<string>{
 
  return this.http.post<string>(this.ruta2 + '/publicacion_inv',{publicacion_inv:publicacion_inv})

}

getpublicacion_inv(iddocente):Observable<Publicacion_inv[]>{
  return this.http.get<Publicacion_inv[]>(this.ruta2 + '/getpublicacion_inv/' + iddocente);

}
crearparticipacion_inv(p_investigaciones:Participacion_inv):Observable<string>{
 
  return this.http.post<string>(this.ruta2 + '/participacion_inv',{p_investigaciones:p_investigaciones})

}

getparticipacion_inv(iddocente):Observable<Participacion_inv[]>{
  return this.http.get<Participacion_inv[]>(this.ruta2 + '/getparticipacion_inv/' + iddocente);

}
crearproyeccion(proyeccion:Proyeccion):Observable<string>{

  return this.http.post<string>(this.ruta2 + '/proyeccion',{proyeccion:proyeccion})

}


getproyeccion(iddocente):Observable<Proyeccion[]>{
  return this.http.get<Proyeccion[]>(this.ruta2 + '/getproyeccion/' + iddocente);

}
getdocentes():Observable<Docente[]>{
  return this.http.get<Docente[]>(this.ruta + '/getdocente')
  }
    

  getaportes(idtotalitem):Observable<AportesLogros[]>{
    return this.http.get<AportesLogros[]>(this.ruta2 + '/getaporte/' + idtotalitem);
  
  }


}
