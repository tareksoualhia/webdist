import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  
  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(): boolean {
    console.log('AuthGuardGuard canActivate'); 
    if (this.authService.isLoggedIn()) {
    
      // L'utilisateur est authentifié, permettre l'accès
      return true;
    } else {
      // L'utilisateur n'est pas authentifié, rediriger vers la page de connexion
      this.router.navigate(['/login']);
      return false;
    }
  }
}
