import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[focused]',
  standalone: true
})
export class FocusedDirective {
  private _renderer = inject(Renderer2);
  private _element = inject(ElementRef);
  
  @Input() set focused(value: boolean) {
    if(value){
      this._renderer.selectRootElement(this._element).nativeElement.scrollIntoView({ block: "center", behavior: 'smooth' });
    }
  }
}
