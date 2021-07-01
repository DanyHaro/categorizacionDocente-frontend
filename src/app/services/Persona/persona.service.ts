import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/Models/categoria';
import { Docente } from 'src/app/Models/docente';
import { Pais } from 'src/app/Models/pais';
import { Persona } from 'src/app/Models/Persona';
import { User } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(public http:HttpClient,private firebase:AngularFireStorage) { }

   ruta ='http://localhost:5050/persona'
  getPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.ruta + '/getpais');
  }

  guardarimagen(imagen : File,name:string):string{
  
    const filePath = imagen.name;
     const task = this.firebase.upload(`img/${name}`, imagen);
     return "imagen subida con exito";
 }
 
 registrarpersona(persona:Persona):Observable<Persona>{
  return this.http.post<Persona>(this.ruta+ '/postpersona',persona);
  }
  allpeople(estado : string):Observable<Persona[]>{
    return this.http.get<Persona[]>(this.ruta +  '/allpersona/'+ estado);
}

allcategoria():Observable<Categoria[]>{
 return this.http.get<Categoria[]>(this.ruta + '/getcat')
}
getusers():Observable<User[]>{
 return this.http.get<User[]>(this.ruta + '/getusers' )
}
crearusuario(usuario:User,docente:Docente):Observable<string>{

 
 return this.http.post<string>(this.ruta + '/postuser',{'usuario':usuario , 'docente':docente});

}
mostrarimagenfirebase(nombre:string):Observable<string>{
  
  const ref = this.firebase.ref(`img/${nombre}`);
  console.log(nombre)
  return ref.getDownloadURL();
}

  
}
