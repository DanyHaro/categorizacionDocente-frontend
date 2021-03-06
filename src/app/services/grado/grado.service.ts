import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Estudios } from 'src/app/Models/estudios';
import { Diplomatura } from 'src/app/Models/dimplomatua';
import { Grado } from 'src/app/Models/grados';
import { Idiomas } from 'src/app/Models/idiomas';
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
  updatetitulo(id,nota):Observable<string>{
    return this.metodohttp.put<string>(this.ruta2 + '/',{idtitulo:id,nota:nota});
}

//DIPLOMATURAS
ruta5 = 'http://localhost:5050/CAD/diplomatura';

getAlldiplos():Observable<Diplomatura[]>{
  return this.metodohttp.get<Diplomatura[]>(this.ruta5 + '/');
}


  //ESTUDIOS
  ruta3 = 'http://localhost:5050/CAD/estudios';

  getAllestudios():Observable<Estudios[]>{
    return this.metodohttp.get<Estudios[]>(this.ruta3 + '/');
  }

  getOneEstudios(id:number):Observable<Estudios[]>{
    return this.metodohttp.get<Estudios[]>(this.ruta3 + '/' + id);
  }

  createEstudios(estudios:Estudios):Observable<Estudios>{
    return this.metodohttp.post<Estudios>(this.ruta3+ '/',estudios);
  }


  //IDIOMAS
  ruta4 = 'http://localhost:5050/CAD/idiomas';

  getAllidiomas():Observable<Idiomas[]>{
    return this.metodohttp.get<Idiomas[]>(this.ruta4 + '/');
  }

  getOneIdiomas(id:number):Observable<Idiomas[]>{
    return this.metodohttp.get<Idiomas[]>(this.ruta4 + '/' + id);
  }

  createIdiomas(idiomas:Idiomas):Observable<Idiomas>{
    return this.metodohttp.post<Idiomas>(this.ruta4+ '/',idiomas);
  }



  

getOnediplo(id:number):Observable<Diplomatura[]>{
  return this.metodohttp.get<Diplomatura[]>(this.ruta5 + '/' + id);
}

creatediplo(di:Diplomatura):Observable<Diplomatura>{
  return this.metodohttp.post<Diplomatura>(this.ruta5+ '/',di);
}
updatediplo(id,nota):Observable<string>{
  return this.metodohttp.put<string>(this.ruta5 + '/',{idespecialidad:id,nota:nota});
}
}
