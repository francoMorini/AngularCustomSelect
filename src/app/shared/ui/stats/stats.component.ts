import { Component, Input } from '@angular/core';
import { Stat } from './stats.type';

@Component({
  selector: 'app-stats[value]',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  @Input() value!: number | string;
  @Input() type: Stat | undefined;
}
