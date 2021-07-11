import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SidadminComponent } from './Sidebar/sidadmin/sidadmin.component';


const routes: Routes = [
 {path:'home',component:SidadminComponent, children:[{path: 'gestion',loadChildren:()=>import('../evaluacion/evaluacion.module').then(m=>m.EvaluacionModule)}]},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }