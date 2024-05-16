import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropList } from './drop-list.class';
import { ListItemComponent } from '../../ui/list-item/list-item.component';
import { FocusedDirective } from '../../directives/focused.directive';

@Component({
  selector: 'app-drop-list[isOpen]',
  standalone: true,
  imports: [ListItemComponent, FocusedDirective],
  templateUrl: './drop-list.component.html',
  styleUrl: './drop-list.component.scss'
})
export class DropListComponent {
  @Input() items: Array<DropList> | undefined;
  @Input() isOpen: boolean = false;
  @Input() itemFocused: number = 0;

  @Output() itemPressed: EventEmitter<number> = new EventEmitter();
}
