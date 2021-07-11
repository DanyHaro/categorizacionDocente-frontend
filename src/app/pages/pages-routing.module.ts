
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradosComponent } from './formacion-academica/grados/grados.component';
import { DocenciaComponent } from './experiencia-laboral/docencia/docencia.component';
import { UniversitariaComponent } from './experiencia-laboral/universitaria/universitaria.component';
import { ProfesionalComponent } from './experiencia-laboral/profesional/profesional.component';
import { PredocenteComponent } from './experiencia-laboral/predocente/predocente.component';
import { NouniversitariaComponent } from './experiencia-laboral/nouniversitaria/nouniversitaria.component';
import { EvaluacionDesempenoComponent } from './desempeño-docente/evaluacion-desempeno/evaluacion-desempeno.component';
import { ActitudesLaboralesComponent } from './desempeño-docente/actitudes-laborales/actitudes-laborales.component';
import { AdviserConsejeriaComponent } from './desempeño-docente/adviser-consejeria/adviser-consejeria.component';
import { CosmovisionComponent } from './capacidad-docente/cosmovision/cosmovision.component';
import { DocenteParcialComponent } from './capacidad-docente/docente-parcial/docente-parcial.component';
import { IntegracionFeComponent } from './capacidad-docente/integracion-fe/integracion-fe.component';
import { ModeloComponent } from './capacidad-docente/modelo/modelo.component';
import { ReconocimientoCapacidadComponent } from './capacidad-docente/reconocimiento-capacidad/reconocimiento-capacidad.component';
import { ServicioAprendizajeComponent } from './capacidad-docente/servicio-aprendizaje/servicio-aprendizaje.component';
import { AportesLogrosComponent } from "./Aportes-Logros/aportes-logros/aportes-logros.component";
import { CapacitacionComponent } from "./Capacitacion-Profesional/capacitacion/capacitacion.component";
import { AsesoriasComponent } from "./Investigacion-Aportes-Conocimiento/asesorias/asesorias.component";
import { LibrosComponent } from "./Investigacion-Aportes-Conocimiento/libros/libros.component";
import { ParticipacionInvComponent } from "./Investigacion-Aportes-Conocimiento/participacion-inv/participacion-inv.component";
import { PublicInvComponent } from "./Investigacion-Aportes-Conocimiento/public-inv/public-inv.component";
import { PremiosComponent } from "./Vinculacion-Medio/premios/premios.component";
import { ProyeccionSocialComponent } from "./Vinculacion-Medio/proyeccion-social/proyeccion-social.component";

const routes: Routes = [
  { path: 'grados', component: GradosComponent },
  { path: 'experiencia en la docencia', component: DocenciaComponent },
  { path: 'experiencia administrativa universitaria', component: UniversitariaComponent },
  { path: 'experiencia profesional', component: ProfesionalComponent },
  { path: 'experiencia predocente', component: PredocenteComponent },
  { path: 'experiencia administrativa no universitaria', component: NouniversitariaComponent },
  { path: 'evaluación del desempeño docente', component: EvaluacionDesempenoComponent },
  { path: 'actitudes laborales', component: ActitudesLaboralesComponent },
  { path: 'adviser y consejeria', component: AdviserConsejeriaComponent },
  { path: 'cosmovisión', component: CosmovisionComponent },
  { path: 'ejercicio docente parcial', component: DocenteParcialComponent },
  { path: 'integración fe enseñanza', component: IntegracionFeComponent },
  { path: 'clase modelo', component: ModeloComponent },
  {
    path: 'reconocimiento de la capacidad docente',
    component: ReconocimientoCapacidadComponent,
  },
  { path: 'servicio aprendizaje', component: ServicioAprendizajeComponent },
  
  {path:'aportes y logros',component:AportesLogrosComponent},
  {path:'premios o reconocimientos',component:PremiosComponent},
  {path:'dictaminación y jurado de tesis',component:AsesoriasComponent},
  {path:'publicaciónes de libros u otros',component:LibrosComponent},
  {path:'capacitación profesional',component:CapacitacionComponent},
  {path:'publicación de investigaciones',component:PublicInvComponent},
  {path:'proyección social',component:ProyeccionSocialComponent},
  {path:'participación en eventos académicos',component:ParticipacionInvComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
