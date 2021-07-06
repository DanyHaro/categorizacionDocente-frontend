import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetodoPagoComponent } from './login/metodo-pago/metodo-pago.component';
import { PagosComponent } from './login/pagos/pagos.component';

const routes: Routes = [
  { path: 'metodo-pago', component: MetodoPagoComponent },
  { path: 'pagos2', component: PagosComponent },

  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'principal/:id',
    loadChildren: () =>
      import('./principal/principal.module').then((m) => m.PrincipalModule),
  },
  {
    path: 'cards/:id',
    loadChildren: () =>
      import('./docentes-cards/docentes-cards.module').then(
        (m) => m.DocentesCardsModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
