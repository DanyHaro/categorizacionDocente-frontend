import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { GradosComponent } from './formacion-academica/grados/grados.component';
import { TitulosComponent } from './formacion-academica/titulos/titulos.component';
import { DiplomaturasComponent } from './formacion-academica/diplomaturas/diplomaturas.component';
import { EstudiosComponent } from './formacion-academica/estudios/estudios.component';

//IMPORTS FROM ANGULAR MATERIAL
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';





@NgModule({
  declarations: [
  GradosComponent,
  TitulosComponent,
  DiplomaturasComponent,
  EstudiosComponent
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
    MatDatepickerModule
    
  ]
})
export class PagesModule { }
