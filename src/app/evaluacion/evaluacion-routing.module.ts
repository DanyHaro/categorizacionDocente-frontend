import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluaciondocenteComponent } from './evaluaciondocente/evaluaciondocente.component';
import { GestiondocenteComponent } from './gestiondocente/gestiondocente.component';
import { ModalComponent } from './modal/modal.component';
import { Model2Component } from './model2/model2.component';




const routes: Routes = [

  {path:'docente',component:GestiondocenteComponent},
  {path:'legajos',component:EvaluaciondocenteComponent},
  {path:'modal',component:ModalComponent},
  {path:'modal2',component:Model2Component},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EvaluacionRoutingModule { }