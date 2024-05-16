import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
  inject,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropListComponent } from '../drop-list/drop-list.component';
import { DropList } from '../drop-list/drop-list.class';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { SpecialsKeysPressedDirective } from '../../directives/specials-keys-pressed.directive';
import { ArrowKeysPressedDirective } from '../../directives/arrow-keys-pressed.directive';
import * as THREE from 'three';
import { PillItemComponent } from '../../ui/pill-item/pill-item.component';
import { SoundsService } from '../../../services/sounds.service';

@Component({
  selector: 'app-input-select[items]',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DropListComponent,
    ClickOutsideDirective,
    SpecialsKeysPressedDirective,
    ArrowKeysPressedDirective,
    PillItemComponent,
  ],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectComponent),
      multi: true,
    },
  ],
})
export class InputSelectComponent implements ControlValueAccessor {
  private _sounds = inject(SoundsService);

  @Input() label: string | undefined;
  @Input() placeholder: string = '';
  @Input() items: DropList[] = [];
  itemFocused: number = 0;
  itemSelected: DropList | undefined;

  @Output() itemReturned: EventEmitter<DropList> = new EventEmitter();

  value: string = '';
  isDropListOpen: boolean = true;

  onChange = (fn: any) => {};
  onTouch = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  moveItemIndex(isMovingUp: boolean): void {
    if (!this.isDropListOpen) {
      return;
    }

    if (this.itemFocused > this.items.length - 1) {
      this.itemFocused = this.items.length - 1;
    }

    if (isMovingUp) {
      if (this.itemFocused <= 0) {
        return;
      }
      this._sounds.play('move');
      this.itemFocused = this.itemFocused - 1;
      return;
    }

    if (this.itemFocused >= this.items.length - 1) {
      return;
    }
    this._sounds.play('move');
    this.itemFocused = this.itemFocused + 1;
  }

  enterIsPressed(): void {
    if (this.value.trim() == '' || this.items.length === 0) {
      return;
    }
    this.addItemSelected(this.items[this.itemFocused]);
  }

  addItemSelected(item: DropList): void {

    this.items[this.itemFocused].name.toLowerCase() == 'haunter'
      ? this._sounds.play('special')
      : this._sounds.play('select');

    this.value = item.name;
    this.itemSelected = item;
    this.itemReturned.emit(item);
    this.reset();
  }

  removeItemSelected(): void {
    this.itemSelected = undefined;
    this.itemReturned.emit(undefined);
  }

  reset(): void {
    this.items = [];
    this.itemFocused = 0;
  }
}
