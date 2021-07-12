import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EvaluaciondocenteComponent } from './evaluaciondocente/evaluaciondocente.component';
import { EvaluacionRoutingModule } from './evaluacion-routing.module';
import { GestiondocenteComponent } from './gestiondocente/gestiondocente.component';
import { ModalComponent } from './modal/modal.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [EvaluaciondocenteComponent, GestiondocenteComponent, ModalComponent],
  imports: [
    NgxDocViewerModule,
    CommonModule,
   EvaluacionRoutingModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    MatPaginatorModule
  ]
})
export class EvaluacionModule { }
