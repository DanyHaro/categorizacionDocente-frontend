import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { Pais } from 'src/app/Models/pais';
import { Persona } from 'src/app/Models/Persona';

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

  
}
