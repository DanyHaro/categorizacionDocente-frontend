import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocentesCardRoutingModule } from './docentes-cards-routing.module';
import { DocentesCardsComponent } from './docentes-cards/docentes-cards.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DocentesCardsComponent],
  imports: [
    CommonModule,
    DocentesCardRoutingModule,
    FormsModule
  ],
  exports:[
    DocentesCardsComponent
  ]
})
export class DocentesCardsModule { }
