import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';


/*ANGULAR MATERIAL*/
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';






@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
