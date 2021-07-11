import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Items } from 'src/app/Models/items';
import { ItemDocentesService } from 'src/app/services/itemsDocentes/item-docentes.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-docentes-cards',
  templateUrl: './docentes-cards.component.html',
  styleUrls: ['./docentes-cards.component.css']
})
export class DocentesCardsComponent implements OnInit {

  usuarioLogueado:any={};

  cards: Items[]=[]

  constructor(private cardsrouter: Router, private loginservice:LoginService, private rutaactivada: ActivatedRoute, private itemdocenteservice:ItemDocentesService ) { }

  ngOnInit(): void {
    this.rutaactivada.params.subscribe(parametro =>{
      this.loginservice.getOneUser(parametro['id']).subscribe(databd=>{
        console.log(databd,"USUARIO ENCONTRADO !");
        this.usuarioLogueado = databd[0];
      })
    })

    this.itemdocenteservice.getAllItems().subscribe(dataitem=>{
      this.cards = dataitem;
    })
  }
  

  goCards(id:number){
    this.itemdocenteservice.getAllItems().subscribe(dataitem=>{
      for (let i = 0; i < dataitem.length; i++) {
        if (dataitem[i].iditem == id) {
          // console.log("ITEM ENCONTRADO",dataitem[i].nombre);

          this.rutaactivada.params.subscribe(parametrousuario=>{
            this.loginservice.getOneUser(parametrousuario['id']).subscribe(user=>{

              console.log("USUARIO PASADO : ",user);
              this.cardsrouter.navigate(['principal',dataitem[i].iditem, user[0].idusuario])
              
            })
          })
          
          
          
        }else{
          // console.log("NO ENCONTRADO !");
          
        }
      }
    })
  }

}
