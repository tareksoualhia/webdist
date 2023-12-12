import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLoggedIn(): boolean {
    const authToken = localStorage.getItem('authToken');
  
    // Vérifiez si le jeton est présent
    if (authToken) {
      const isTokenExpired = this.isTokenExpired(authToken);
  
      if (!isTokenExpired) {
        console.log('User is authenticated.');
        return true;
      } else {
        console.log('Token is expired.');
      }
    } else {
      console.log('No authToken found.');
    }
  
    // L'utilisateur n'est pas authentifié
    return false;
  }

  // Méthode pour vérifier si un jeton est expiré
  private isTokenExpired(token: string): boolean {
    try {
      const decodedToken: any = jwt_decode(token);
      console.log('Decoded Token:', decodedToken);
  
      const currentTime = Date.now() / 1000;
      console.log('Current Time:', currentTime);
  
      const isExpired = decodedToken.exp < currentTime;
      console.log('Is Token Expired:', isExpired);
  
      return isExpired;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  }
  

  // Méthode pour stocker le jeton d'authentification dans le stockage local
  setAuthToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Méthode pour supprimer le jeton d'authentification du stockage local
  removeAuthToken(): void {
    localStorage.removeItem('authToken');
  }

  // Méthode pour obtenir le jeton d'authentification du stockage local
  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
function jwt_decode(token: string): any {
  throw new Error('Function not implemented.');
}

