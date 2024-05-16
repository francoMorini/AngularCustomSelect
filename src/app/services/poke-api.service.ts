import { Injectable, inject } from '@angular/core';
import { Pokemon } from '../components/landing/pokemon.class';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private _http = inject(HttpClient);

  private API_URL: string = 'https://pokeapi.co/api/v2/';
  private API_TYPE_POKEMON: string = 'pokemon/';

  constructor() {}

  getPokemon(name: string): Observable<Pokemon> {
    return this._http
      .get<Pokemon>(
        `${this.API_URL}${this.API_TYPE_POKEMON}${name.toLowerCase()}`
      )
      .pipe(
        map(
          (pokemon: any) =>
            new Pokemon(
              pokemon.name,
              pokemon.sprites.other['official-artwork'].front_default,
              {
                hp: pokemon.stats[0].base_stat,
                atk: pokemon.stats[1].base_stat,
                def: pokemon.stats[2].base_stat,
              }
            )
        )
      );
  }
}
