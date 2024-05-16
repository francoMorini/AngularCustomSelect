import { Component, OnInit, Signal, WritableSignal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSelectComponent } from '../../shared/components/input-select/input-select.component';
import { PokemonsService } from '../../pokemonsListDB/pokemonList.service';
import { PokemonList } from '../../pokemonsListDB/pokemonList.interface';
import { DropList } from '../../shared/components/drop-list/drop-list.class';
import { CardComponent } from '../../shared/components/card/card.component';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from './pokemon.class';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [InputSelectComponent, FormsModule, CardComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  value: string = '';

  _pokemonList = inject(PokemonsService);
  _pokeApi = inject(PokeApiService);
  _pokemonService = inject(PokemonService);

  pokemons: DropList[] = [];
  pokemonSelected: Signal<Pokemon | null>;

  constructor() {
    this.pokemonSelected = this._pokemonService.pokemon;
  }

  onChange(value: string): void {
    const pokemonList: Array<PokemonList> = this._pokemonList.findThePokemon(value);
    this.pokemons = this._pokemonList.mapPokemonWithDropList(pokemonList);
  }

  setPokemon(pokemon: DropList | undefined): void {
    if(!(!!pokemon)){
      this._pokemonService.setPokemon = null;
      return;
    }
    this._pokeApi.getPokemon(pokemon.name).subscribe(
      (pokemon: any) => this._pokemonService.setPokemon = pokemon
    );
  }
}
