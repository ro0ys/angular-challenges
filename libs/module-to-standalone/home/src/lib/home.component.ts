import { TOKEN } from '@angular-challenges/module-to-standalone/core/providers';
import { AuthorizationService } from '@angular-challenges/module-to-standalone/core/service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'lib-home',
  standalone: true,
  template: `Home component
    <section class="flex gap-5 items-center">
      Authorization :
      <button class="border p-2" (click)="authorizeService.authorize()">
        Authorize
      </button>
      <button class="border p-2" (click)="authorizeService.forbid()">
        Forbid
      </button>
      (isAuthorized: {{ authorizeService.isAuthorized() }})
    </section>

    <section>LoadedToken {{ token }}</section> `,
})
export default class HomeComponent {
  constructor(
    public authorizeService: AuthorizationService,
    @Inject(TOKEN) public token: string
  ) {}
}
