import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import{MediaMatcher} from '@angular/cdk/layout'
import { ItemDocentesService } from 'src/app/services/itemsDocentes/item-docentes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Factor } from 'src/app/Models/factor';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mobileQuery: MediaQueryList;
  // opcionsidebar: OpcionesSidebar[];
  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerNav:Factor[]=[]

  // fillerNav = [
  //   {
  //     name: 'Grado',
  //     route: '',
  //     icon:'home'
  //   },

  //   {
  //     name: 'Titulo',
  //     route: '',
  //     icon:'home'

  //   },

  //   {
  //     name: 'Especialidad / Diplomatura',
  //     route: '',
  //     icon:'home'

  //   },

  //   {
  //     name: 'Idiomas',
  //     route: '',
  //     icon:'home'

  //   }
  // ]

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private factorservice:ItemDocentesService, private sidebarRouter:Router,private rutaactivada:ActivatedRoute) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit(): void {
    this.rutaactivada.params.subscribe(parametro=>{
      this.factorservice.getGroupfactor(parametro['id']).subscribe(datafactor=>{
        console.log("GRUPO FACTOR ENCONTRADO !",datafactor);
        this.fillerNav = datafactor;
      })

    })
  }

}
