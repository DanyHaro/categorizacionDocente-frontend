import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from 'src/app/Models/pais';
import { Universidad } from 'src/app/Models/universidad';

@Injectable({
  providedIn: 'root'
})
export class UnipaisService {

  constructor(private metodohttp:HttpClient) {}

  ruta = 'http://localhost:5050/uni_pais';

  getAllpaises():Observable<Pais[]>{
    return this.metodohttp.get<Pais[]>(this.ruta + '/pais');
  }

  getGroupUniversidad(id:number):Observable<Universidad[]>{
    return this.metodohttp.get<Universidad[]>(this.ruta + '/universidad' + '/' + id)
  }

  getAlluniversidades():Observable<Universidad[]>{
    return this.metodohttp.get<Universidad[]>(this.ruta + '/universidad');
  }









}
