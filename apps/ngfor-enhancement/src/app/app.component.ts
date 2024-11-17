import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForEmptyDirective } from './ng-for-empty.directive';

interface Person {
  name: string;
}

@Component({
  standalone: true,
  imports: [NgFor, NgForEmptyDirective],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; empty: emptyList">
      {{ person.name }}
    </div>
    <ng-template #emptyList>The list is empty !!</ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  persons: Person[] = [
    { name: 'Rémi' },
    { name: 'Juliette' },
    { name: 'Harry' },
  ];
}
