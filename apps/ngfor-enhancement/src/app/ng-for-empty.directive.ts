/* eslint-disable @angular-eslint/directive-selector */
import {
  Directive,
  DoCheck,
  EmbeddedViewRef,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngFor]',
  standalone: true,
})
export class NgForEmptyDirective<T> implements DoCheck {
  private viewContainerRef = inject(ViewContainerRef);
  private ref?: EmbeddedViewRef<unknown>;

  // same input as ngFor, we just need it to check if list is empty
  @Input() ngForOf?: T[] = undefined;

  // reference of the empty template to display
  @Input() ngForEmpty!: TemplateRef<unknown>;

  ngDoCheck(): void {
    this.ref?.destroy();

    if (!this.ngForOf || this.ngForOf.length === 0) {
      this.ref = this.viewContainerRef.createEmbeddedView(this.ngForEmpty);
    } else {
      this.ref?.destroy();
    }
  }
}
