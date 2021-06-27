import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDocentesService {

  constructor(private metodohttp : HttpClient) {
    
  }

  url = 'http://localhost:5050/item/';
  getitems(){
    return this.metodohttp.get(this.url)
  }
  
}
