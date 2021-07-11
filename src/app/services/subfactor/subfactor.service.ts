import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subfactor } from 'src/app/Models/subfactor';

@Injectable({
  providedIn: 'root'
})
export class SubfactorService {

  constructor(private metodohttp: HttpClient) {}

  ruta = 'http://localhost:5050/subfactor';
  getAllsubfactor():Observable<Subfactor[]>{
    return this.metodohttp.get<Subfactor[]>(this.ruta + '/');
  }

  getGroupSubfactor(id: number):Observable<Subfactor[]>{
    return this.metodohttp.get<Subfactor[]>(this.ruta + '/' + id)
  }

}
