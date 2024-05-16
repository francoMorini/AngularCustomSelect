import {
  Directive,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[specialsKeysPressed]',
  standalone: true,
})
export class SpecialsKeysPressedDirective {
  @Output() escapePressed: EventEmitter<void> = new EventEmitter();
  @Output() enterPressed: EventEmitter<void> = new EventEmitter();

  @HostListener('document:keydown.escape') escape(): void {
    this.escapePressed.emit();
  }
  @HostListener('document:keydown.enter') enter(): void {
    this.enterPressed.emit();
  }
}
