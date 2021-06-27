import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from '../principal/sidebar/sidebar.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';

const routes: Routes = [
  { path: '', component: LogincomponentComponent },
  { path: 'metodo-pago', component: MetodoPagoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
