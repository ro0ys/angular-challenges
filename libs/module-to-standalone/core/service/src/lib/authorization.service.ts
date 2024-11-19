import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthorizationService {
  readonly isAuthorized = signal<boolean>(false);

  authorize() {
    this.isAuthorized.set(true);
  }

  forbid() {
    this.isAuthorized.set(false);
  }
}
