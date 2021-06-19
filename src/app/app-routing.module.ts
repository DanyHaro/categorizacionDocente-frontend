import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'login',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
  {path:'principal',loadChildren:()=>import('./principal/principal.module').then(m=>m.PrincipalModule)},
  {path:'cards',loadChildren:()=>import('./docentes-cards/docentes-cards.module').then(m=>m.DocentesCardsModule)},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
