import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);

  let isloggedIn = sessionStorage.getItem('isloggedIn');
  if(isloggedIn=='false'){
    _router.navigate(['login']);
    return false;
  }
  return true;
};
