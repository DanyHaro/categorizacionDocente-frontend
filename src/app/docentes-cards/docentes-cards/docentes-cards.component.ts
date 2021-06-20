import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { heroeInterface, LegajosDocentesService } from 'src/app/services/legajosDocentes/legajos-docentes.service';

@Component({
  selector: 'app-docentes-cards',
  templateUrl: './docentes-cards.component.html',
  styleUrls: ['./docentes-cards.component.css']
})
export class DocentesCardsComponent implements OnInit {

  cards:heroeInterface[]=[];

  constructor(private itemservice: LegajosDocentesService, private cardsrouter: Router) { }

  ngOnInit(): void {
    this.cards = this.itemservice.getHeroes();
  }

  goCards(){
    this.cardsrouter.navigateByUrl('/principal');
  }

}
