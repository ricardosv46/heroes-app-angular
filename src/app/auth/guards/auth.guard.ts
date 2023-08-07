import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard {}

// const isAuthenticated = (): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
//     const authService = inject(AuthService);
//     const router = inject(Router);
//     return authService.checkAuthentication().pipe(
//         take(1),
//         tap((isAuthenticated: boolean) => {
//             if (!isAuthenticated) {
//                 router.navigate(['./auth/login']);
//             }
//         }),
//     );
//   }
   
//   export const canActivateGuard:CanActivateFn = isAuthenticated;
//   export const canMatchGuard:CanMatchFn = isAuthenticated;


const checkAuthStatus = (): boolean | Observable<boolean> => {
    //se inyectan el AuthService y el Router
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
   
    return authService.checkAuthentication().pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          router.navigate(['/auth/login']);
        }
      })
    );
  };

export const canMatchGuard: CanMatchFn = ( //Tipado CanMatchFN
    route: Route,
    segments: UrlSegment[]
    ) => {
        return checkAuthStatus();
};

export const canActivateGuard: CanActivateFn = ( //Hay que tener en cuenta el tipado CanActiveFn
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) => {
    return checkAuthStatus();
};