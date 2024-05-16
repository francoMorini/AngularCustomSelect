import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Pokemon } from '../components/landing/pokemon.class';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon$: WritableSignal<Pokemon| null> = signal(null);

  get pokemon() {
    return this.pokemon$.asReadonly();
  }

  set setPokemon(pokemon: Pokemon | null) {
    this.pokemon$.update(() => pokemon);
  }
}
