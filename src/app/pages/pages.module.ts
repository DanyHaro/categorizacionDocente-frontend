import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { GradosComponent } from './formacion-academica/grados/grados.component';
import { TitulosComponent } from './formacion-academica/titulos/titulos.component';
import { DiplomaturasComponent } from './formacion-academica/diplomaturas/diplomaturas.component';
import { EstudiosComponent } from './formacion-academica/estudios/estudios.component';
import { PredocenteComponent } from './experiencia-laboral/predocente/predocente.component';
import { ProfesionalComponent } from './experiencia-laboral/profesional/profesional.component';
import { DocenciaComponent } from './experiencia-laboral/docencia/docencia.component';
import { NouniversitariaComponent } from './experiencia-laboral/nouniversitaria/nouniversitaria.component';
import { UniversitariaComponent } from './experiencia-laboral/universitaria/universitaria.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AdviserConsejeriaComponent } from './desempeño-docente/adviser-consejeria/adviser-consejeria.component';
import { ActitudesLaboralesComponent } from './desempeño-docente/actitudes-laborales/actitudes-laborales.component';
import { EvaluacionDesempenoComponent } from './desempeño-docente/evaluacion-desempeno/evaluacion-desempeno.component';
import { ModeloComponent } from './capacidad-docente/modelo/modelo.component';
import { CosmovisionComponent } from './capacidad-docente/cosmovision/cosmovision.component';
import { DocenteParcialComponent } from './capacidad-docente/docente-parcial/docente-parcial.component';
import { ReconocimientoCapacidadComponent } from './capacidad-docente/reconocimiento-capacidad/reconocimiento-capacidad.component';
import { IntegracionFeComponent } from './capacidad-docente/integracion-fe/integracion-fe.component';
import { ServicioAprendizajeComponent } from './capacidad-docente/servicio-aprendizaje/servicio-aprendizaje.component';
import { AportesLogrosComponent } from './Aportes-Logros/aportes-logros/aportes-logros.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { PremiosComponent } from './Vinculacion-Medio/premios/premios.component';
import { AsesoriasComponent } from './Investigacion-Aportes-Conocimiento/asesorias/asesorias.component';
import { LibrosComponent } from './Investigacion-Aportes-Conocimiento/libros/libros.component';
import { ProyeccionSocialComponent } from './Vinculacion-Medio/proyeccion-social/proyeccion-social.component';
import { CapacitacionComponent } from './Capacitacion-Profesional/capacitacion/capacitacion.component';
import { PublicInvComponent } from './Investigacion-Aportes-Conocimiento/public-inv/public-inv.component';
import { ParticipacionInvComponent } from './Investigacion-Aportes-Conocimiento/participacion-inv/participacion-inv.component';


//IMPORTS FROM ANGULAR MATERIAL
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    GradosComponent,
    TitulosComponent,
    DiplomaturasComponent,
    EstudiosComponent,
    PredocenteComponent,
    ProfesionalComponent,
    DocenciaComponent,
    NouniversitariaComponent,
    UniversitariaComponent,
    AdviserConsejeriaComponent,
    ActitudesLaboralesComponent,
    EvaluacionDesempenoComponent,
    ModeloComponent,
    CosmovisionComponent,
    DocenteParcialComponent,
    ReconocimientoCapacidadComponent,
    IntegracionFeComponent,
    ServicioAprendizajeComponent,
    AportesLogrosComponent,
    PremiosComponent,
    AsesoriasComponent,
    LibrosComponent,
    ProyeccionSocialComponent,
    CapacitacionComponent,
    PublicInvComponent,
    ParticipacionInvComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,

    //ANGULAR MATERIAL
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
MatButtonModule,
MatSelectModule,
MatRadioModule,
CommonModule,

FormsModule,

MatFormFieldModule,
MatIconModule,
MatInputModule,
ReactiveFormsModule,
MatGridListModule,
MatSelectModule,
MatDatepickerModule,
MatButtonModule,

MatSelectModule,
MatRadioModule,

  ],
})
export class PagesModule {}
