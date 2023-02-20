import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public baseUrl: string =  'http://localhost:3000';

  // inyectamos el http para poder acceder a sus métodos
  constructor(
    private http : HttpClient
  ) { }

  // método para obtener el listado
  getHeroes(): Observable<Heroe[]>{
    let url = `${this.baseUrl}/heroes`;
    return this.http.get<Heroe[]>(url)
  }

  getHeroePorId(id:string):Observable<Heroe>{
    const url = `${this.baseUrl}/heroes/${id}`;
    let resultado = this.http.get<Heroe>(url);
    return resultado;
  }

  getSugerencias(termino:string):Observable<Heroe[]>{
    const url = `${this.baseUrl}/heroes?q=${termino}&_limit=6}`;
    let resultado = this.http.get<Heroe[]>(url);
    return resultado

  }
}
