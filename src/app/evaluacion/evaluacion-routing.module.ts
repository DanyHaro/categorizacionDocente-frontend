import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluaciondocenteComponent } from './evaluaciondocente/evaluaciondocente.component';
import { GestiondocenteComponent } from './gestiondocente/gestiondocente.component';
import { ModalComponent } from './modal/modal.component';




const routes: Routes = [

  {path:'docente',component:GestiondocenteComponent},
  {path:'legajos',component:EvaluaciondocenteComponent},
  {path:'modal',component:ModalComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EvaluacionRoutingModule { }