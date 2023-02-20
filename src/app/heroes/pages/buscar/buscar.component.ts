import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  public termino: string = '';
  public heroes: Heroe[] =[];
  public heroeSeleccionado: Heroe | undefined;
  public mostrarNoExiste = false;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  public buscando(): void {
    this.heroesService.getSugerencias(this.termino).subscribe(
      heroes => {
        this.heroes = heroes;
        if(heroes && heroes.length == 0){
          // console.log('no existe')
          this.mostrarNoExiste = true;
          this.heroeSeleccionado = undefined;
        }

      }
    )
  }

  public opcionSeleccionada(event:MatAutocompleteSelectedEvent):void {
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId(heroe.id!).subscribe(
      heroe => this.heroeSeleccionado = heroe
    )


  }

}
