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

const routes: Routes = [
  { path: 'grados', component: GradosComponent },
  { path: 'docencia', component: DocenciaComponent },
  { path: 'universitaria', component: UniversitariaComponent },
  { path: 'profesional', component: ProfesionalComponent },
  { path: 'predocente', component: PredocenteComponent },
  { path: 'nouniversitaria', component: NouniversitariaComponent },
  { path: 'evaluacion-desempeno', component: EvaluacionDesempenoComponent },
  { path: 'actitudes-laborales', component: ActitudesLaboralesComponent },
  { path: 'adviser-consejeria', component: AdviserConsejeriaComponent },
  { path: 'cosmovision', component: CosmovisionComponent },
  { path: 'docente-parcial', component: DocenteParcialComponent },
  { path: 'integracion-fe', component: IntegracionFeComponent },
  { path: 'modelo', component: ModeloComponent },
  {
    path: 'reconocimiento-capacidad',
    component: ReconocimientoCapacidadComponent,
  },
  { path: 'servicio-aprendizaje', component: ServicioAprendizajeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
