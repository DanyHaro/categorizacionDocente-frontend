import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocentesCardRoutingModule } from './docentes-cards-routing.module';
import { DocentesCardsComponent } from './docentes-cards/docentes-cards.component';



@NgModule({
  declarations: [DocentesCardsComponent],
  imports: [
    CommonModule,
    DocentesCardRoutingModule
  ]
})
export class DocentesCardsModule { }
