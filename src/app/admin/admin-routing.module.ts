import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestiondocenteComponent } from './Secretaria/gestiondocente/gestiondocente.component';


const routes: Routes = [
 {path:'gestion',component:GestiondocenteComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }