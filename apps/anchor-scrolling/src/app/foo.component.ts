import { Component } from '@angular/core';
import { NavButtonComponent } from './nav-button.component';

@Component({
  standalone: true,
  imports: [NavButtonComponent],
  selector: 'app-foo',
  template: `
    Welcome to foo page
    <nav-button href="/home" class="fixed top-3 left-1/2">Home Page</nav-button>
    <div id="section1"  class="h-screen bg-blue-200">
      section 1
      <nav-button href="/foo" anchor="section2">Scroll section 2</nav-button>
    </div>
    <div id="section2"  class="h-screen bg-red-200">
      section 2
      <nav-button href="/foo" anchor="section1">Scroll section 1</nav-button>
    </div>
  `,
})
export class FooComponent {}
