import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string;
  private datosUsuarios: User;
  private Url = 'ds'

  // private httpHeaders = new HttpHeaders({ 'Content-Type': 'Authorization'});


  constructor(private metodoHttp:HttpClient) {}

  ruta = 'http://localhost:5050/usuario'

  getAllUsers():Observable<User[]>{
    return this.metodoHttp.get<User[]>(this.ruta + '/');
  }

  getOneUser(id:number):Observable<User[]>{
    return this.metodoHttp.get<User[]>(this.ruta + '/' +id);
  }

  SetInformation(idusuario:string){
    localStorage.setItem('idusuario',idusuario);
  }

  getInformation(){
    let id
    return id=localStorage.getItem('idusuario')
  }
}
