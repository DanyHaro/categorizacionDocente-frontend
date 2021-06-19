import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocentesCardsComponent } from './docentes-cards/docentes-cards.component';

const routes: Routes = [
    {path:'',component:DocentesCardsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DocentesCardRoutingModule { }