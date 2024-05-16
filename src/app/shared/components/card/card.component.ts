import { Component, Input } from '@angular/core';
import { StatsComponent } from '../../ui/stats/stats.component';
import { Pokemon } from '../../../components/landing/pokemon.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [StatsComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() pokemon: Pokemon | undefined;
}
