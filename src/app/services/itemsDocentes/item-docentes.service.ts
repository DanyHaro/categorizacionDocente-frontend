import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factor } from 'src/app/Models/factor';
import { Items } from 'src/app/Models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemDocentesService {

  constructor(private metodohttp : HttpClient) {
    
  }

  ///////////////////////////////////
  // ITEMS
  ruta = 'http://localhost:5050/item';
  getAllItems():Observable<Items[]>{
    return this.metodohttp.get<Items[]>(this.ruta + '/');
  }




  /////////////////////////////////
  // FACTORES POR CADA ITEM
  ruta2 = 'http://localhost:5050/CAD/factor'
  getGroupfactor(id:number):Observable<Factor[]>{
    return this.metodohttp.get<Factor[]>(this.ruta2 + '/' + id)
  }
  
}
