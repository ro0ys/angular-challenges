import { CanMatchFn, Router } from '@angular/router';

import { AuthorizationService } from '@angular-challenges/module-to-standalone/core/service';
import { inject } from '@angular/core';

export const isAuthorizedGuard: CanMatchFn = () => {

  const authorizationService = inject(AuthorizationService);
  const router = inject(Router);

  return authorizationService.isAuthorized() || router.createUrlTree(['forbidden'])

}