import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appArrowKeysPressed]',
  standalone: true
})
export class ArrowKeysPressedDirective {
  @Output() isMovingUp: EventEmitter<boolean> = new EventEmitter();

  @HostListener('document:keydown.ArrowUp', ['$event']) movingUp(event: any): void {
    event.preventDefault();
    this.isMovingUp.emit(true);
  }
  @HostListener('document:keydown.ArrowDown', ['$event']) movingDown(event: any): void {
    event.preventDefault();
    this.isMovingUp.emit(false);
  }
}
