import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grado } from 'src/app/Models/grados';
import { Titulo } from 'src/app/Models/titulo';

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  constructor(private metodohttp:HttpClient) { }


  //FORMACION ACADEMICA PROFESIONAL


  //GRADOS
  ruta = 'http://localhost:5050/CAD/grado';
  
  getAllgrados():Observable<Grado[]>{
    return this.metodohttp.get<Grado[]>(this.ruta + '/');
  }

  getOnegrado(id:number):Observable<Grado[]>{
    return this.metodohttp.get<Grado[]>(this.ruta + '/' + id);
  }

  createGrado(grado:Grado):Observable<Grado>{
    return this.metodohttp.post<Grado>(this.ruta+ '/',grado);
  }
  updategrado(id,nota):Observable<string>{
      return this.metodohttp.put<string>(this.ruta + '/',{idgrado:id,nota:nota});
  }


  //TITULOS
  ruta2 = 'http://localhost:5050/CAD/titulo';

  getAlltitulos():Observable<Titulo[]>{
    return this.metodohttp.get<Titulo[]>(this.ruta2 + '/');
  }

  getOneTitulo(id:number):Observable<Titulo[]>{
    return this.metodohttp.get<Titulo[]>(this.ruta2 + '/' + id);
  }

  createTitulo(titulo:Titulo):Observable<Titulo>{
    return this.metodohttp.post<Titulo>(this.ruta2+ '/',titulo);
  }

}
