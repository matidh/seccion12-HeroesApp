import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img {
      width: 100%;
      border-radius: 5px;
    }
    `
  ]
})
export class HeroeComponent implements OnInit {

  public heroe!: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(
        ({id}) => this.heroesService.getHeroePorId(id)
      )
    )
    .subscribe({
      next:(
        (heroe) => {
              this.heroe = heroe;
              console.log(heroe)
            }
          ),
      error: (
        (error)=> {
          console.log(error)
        }
      )

    })
  }

  public navigate(): void {
    this.router.navigate(['heroes/listado'])
  }
}
