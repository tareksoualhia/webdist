import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/Services/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : Login;
  constructor(private loginService : LoginService , private router:Router,private authService:AuthServiceService ) { }

  ngOnInit(): void {
    this.login= new Login();
  }
  save() {
    if (!this.login.email || !this.login.password) {
      console.log('Veuillez remplir tous les champs.');
      return;
    }

    this.loginService.Loginadmin(this.login).subscribe(
      (response: any) => {
        if (response.token) {
          console.log('Connexion réussie');
          // Stockez le token dans le service d'authentification
          this.authService.setAuthToken(response.token);
          // Redirigez vers la page d'accueil
          this.router.navigate(['/accueil']);
        } else {
          console.log('Nom d\'utilisateur ou mot de passe incorrect.');
        }
      },
      (error) => {
        console.error('Erreur de connexion : ', error);
      }
    );
  }
  
}
