import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DiplomaturasComponent } from "./formacion-academica/diplomaturas/diplomaturas.component";
import { EstudiosComponent } from "./formacion-academica/estudios/estudios.component";
import { GradosComponent } from "./formacion-academica/grados/grados.component";
import { IdiomasComponent } from "./formacion-academica/idiomas/idiomas.component";
import { TitulosComponent } from "./formacion-academica/titulos/titulos.component";

const routes: Routes = [
    {path:'GRADOS/:id/:idusu',component:GradosComponent},
    {path:'TÍTULOS/:id/:idusu',component:TitulosComponent},
    {path:'DIPLOMATURAS/:id/:idusu',component:DiplomaturasComponent},
    {path:'ESTUDIOS/:id/:idusu',component:EstudiosComponent},
    {path:'IDIOMAS/:id/:idusu',component:IdiomasComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
