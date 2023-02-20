import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {
  public heroes : Heroe[] = [];

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe({
      next: (heroes:Heroe[]) => {
        this.heroes = heroes;
        console.log(heroes)
      },
      error: (error)=> {
        console.log('error');
      }
    });
  }

}


