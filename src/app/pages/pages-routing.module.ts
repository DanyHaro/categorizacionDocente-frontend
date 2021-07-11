import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AportesLogrosComponent } from "./Aportes-Logros/aportes-logros/aportes-logros.component";
import { CosmovisionComponent } from "./capacidad-docente/cosmovision/cosmovision.component";
import { DocenteParcialComponent } from "./capacidad-docente/docente-parcial/docente-parcial.component";
import { IntegracionFeComponent } from "./capacidad-docente/integracion-fe/integracion-fe.component";
import { ModeloComponent } from "./capacidad-docente/modelo/modelo.component";
import { ReconocimientoCapacidadComponent } from "./capacidad-docente/reconocimiento-capacidad/reconocimiento-capacidad.component";
import { ServicioAprendizajeComponent } from "./capacidad-docente/servicio-aprendizaje/servicio-aprendizaje.component";
import { ActitudesLaboralesComponent } from "./desempeño-docente/actitudes-laborales/actitudes-laborales.component";
import { AdviserConsejeriaComponent } from "./desempeño-docente/adviser-consejeria/adviser-consejeria.component";
import { EvaluacionDesempenoComponent } from "./desempeño-docente/evaluacion-desempeno/evaluacion-desempeno.component";
import { DocenciaComponent } from "./experiencia-laboral/docencia/docencia.component";
import { NouniversitariaComponent } from "./experiencia-laboral/nouniversitaria/nouniversitaria.component";
import { PredocenteComponent } from "./experiencia-laboral/predocente/predocente.component";
import { ProfesionalComponent } from "./experiencia-laboral/profesional/profesional.component";
import { UniversitariaComponent } from "./experiencia-laboral/universitaria/universitaria.component";
import { DiplomaturasComponent } from "./formacion-academica/diplomaturas/diplomaturas.component";
import { EstudiosComponent } from "./formacion-academica/estudios/estudios.component";
import { GradosComponent } from "./formacion-academica/grados/grados.component";
import { IdiomasComponent } from "./formacion-academica/idiomas/idiomas.component";
import { TitulosComponent } from "./formacion-academica/titulos/titulos.component";
import { PremiosComponent } from "./Vinculacion-Medio/premios/premios.component";

const routes: Routes = [
    {path:'GRADOS/:id/:idusu',component:GradosComponent},
    {path:'TÍTULOS/:id/:idusu',component:TitulosComponent},
    {path:'DIPLOMATURAS/:id/:idusu',component:DiplomaturasComponent},
    {path:'ESTUDIOS/:id/:idusu',component:EstudiosComponent},
    {path:'IDIOMAS/:id/:idusu',component:IdiomasComponent},

  { path: 'modelo', component: ModeloComponent },
  { path: 'experiencia en la docencia', component: DocenciaComponent},
  { path: 'experiencia administrativa universitaria', component: UniversitariaComponent},
  { path: 'experiencia profesional', component: ProfesionalComponent},
  { path: 'experiencia predocente', component: PredocenteComponent},
  { path: 'experiencia administrativa no universitaria', component: NouniversitariaComponent},
  { path: 'evaluación del desempeño docente', component: EvaluacionDesempenoComponent},
  { path: 'actitudes laborales', component: ActitudesLaboralesComponent},
  { path: 'adviser y consejeria', component: AdviserConsejeriaComponent},
  { path: 'cosmovisión', component: CosmovisionComponent},
  { path: 'ejercicio docente parcial', component: DocenteParcialComponent},
  { path: 'integración fe enseñanza', component: IntegracionFeComponent},
  { path: 'clase modelo', component: ModeloComponent },
  { path: 'reconocimiento de la capacidad docente', component: ReconocimientoCapacidadComponent},
  { path: 'servicio aprendizaje', component: ServicioAprendizajeComponent },
  {path:'aportes y logros',component:AportesLogrosComponent},
  {path:'premios o reconocimientos',component:PremiosComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
