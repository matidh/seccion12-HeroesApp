import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(
        (params) => {
          let heroe = params['id'];
          console.log('heroe: ', heroe)
        }
      ),
      error: (
        (error)=> {
          console.log(error)
        }
      )

    })
  }

}
