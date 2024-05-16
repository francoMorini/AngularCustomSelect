import { Injectable } from '@angular/core';
import { PokemonList } from './pokemonList.interface';
import { pokemonList } from './pokemonList';
import { DropList } from '../shared/components/drop-list/drop-list.class';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  FILTER_MIN_LENGTH: number = 2;

  POKEMON_IMG_URL: string = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/';
  POKEMON_IMG_URL_EXT: string = '.png';
  
  POKEMON_ANIMATED_IMG_URL: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/';
  POKEMON_ANIMATED_IMG_URL_EXT: string = '.gif';

  API_URL: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor() {}

  findThePokemon(name: string, validation: boolean = true): PokemonList[] {
  
    if(name === '*'){
      return pokemonList.slice(0, 25);
    }

    if(validation && name.length <= this.FILTER_MIN_LENGTH){
      return [];
    }
    
    const regex = new RegExp(name.toLowerCase(), 'g');
  
    return pokemonList.filter((pokemon: PokemonList) =>
      pokemon.name.toLowerCase().match(regex)
    );
  };

  mapPokemonWithDropList(pokemons: Array<PokemonList>): Array<DropList> {
    return pokemons.map(pokemon => new DropList(pokemon.name, `${this.POKEMON_IMG_URL}${pokemon.id}${this.POKEMON_IMG_URL_EXT}`));
  }

}
