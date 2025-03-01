import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { EditionEnum, IncomingEdition } from '../data/global';

export const EditionGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const year = route.paramMap.get('year');  

  if(year){
    if (year == IncomingEdition){
      return router.createUrlTree(['']);
    } else if(Object.values(EditionEnum).includes(year as EditionEnum)){
      return true;
    }
  }
  
  return router.createUrlTree(['/404']);
}