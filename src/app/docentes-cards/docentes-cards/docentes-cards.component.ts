import { Component, OnInit } from '@angular/core';
import { heroeInterface, LegajosDocentesService } from 'src/app/services/legajosDocentes/legajos-docentes.service';

@Component({
  selector: 'app-docentes-cards',
  templateUrl: './docentes-cards.component.html',
  styleUrls: ['./docentes-cards.component.css']
})
export class DocentesCardsComponent implements OnInit {

  cards:heroeInterface[]=[];

  constructor(private itemservice: LegajosDocentesService) { }

  ngOnInit(): void {
    this.cards = this.itemservice.getHeroes();
  }

}
