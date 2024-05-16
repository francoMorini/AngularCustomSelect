import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pill-item[name]',
  standalone: true,
  imports: [],
  templateUrl: './pill-item.component.html',
  styleUrl: './pill-item.component.scss'
})
export class PillItemComponent {
  @Input() name!: string;
  @Input() image: string | undefined;
  @Input() closeButton: boolean = false;
  @Output() closePressed: EventEmitter<void> = new EventEmitter();
}
