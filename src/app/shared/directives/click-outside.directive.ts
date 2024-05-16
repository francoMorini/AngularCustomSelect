import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
  private _renderer = inject(Renderer2);
  private _element = inject(ElementRef);

  @Output() outsideClick: EventEmitter<boolean> = new EventEmitter();

  private listener: (() => void) | undefined;

  ngOnInit(): void {
    this.listener = this._renderer.listen(
      'document',
      'click',
      (event: Event) => {
        this._element.nativeElement.parentElement.contains(event.target)
          ? this.outsideClick.emit(true)
          : this.outsideClick.emit(false);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener();
    }
  }
}
