import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grado } from 'src/app/Models/grados';

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  constructor(private metodohttp:HttpClient) { }


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
}
