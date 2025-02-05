import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {ServiceUserService} from "../service/service-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion-inscription',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: './connexion-inscription.component.html',
  styleUrl: './connexion-inscription.component.scss'
})
export class ConnexionInscriptionComponent {

  protected isLogin: boolean = true; // sert au passafe de la connection à l'inscription
  protected loginError: string = ''; // sert à l'impression des erreurs de connexion
  protected signupError: string = ''; // sert à l'impression des erreurs d'inscription

  // Variables pour la connection
  protected username: string = '';
  protected password: string = '';
  private user: any;

  // Variables pour l'inscription
  protected signupUsername: string = '';
  protected signupEmail: string = '';
  protected confirmEmail: string = '';
  protected signupPassword: string = '';
  protected confirmPassword: string = '';

  public constructor(private service: ServiceUserService, private router: Router) {}

  // Toggle between login and signup forms
  public toggleForm() {
    this.isLogin = !this.isLogin;
    this.loginError = '';
    this.signupError = '';
  }

  public login() {
    if (!this.username || !this.password) {
      this.loginError = "Tous les champs sont requis.";
      return;
    }
    this.service.getUserByName(this.username).subscribe((data: any) => {
      if (data) {
        this.user = data;
        // vérif mdp
        if (this.user.password === this.password) {
          localStorage.setItem('userName', JSON.stringify(this.user.name)); // Persist login state
          this.router.navigate(['/recettes-toutes']).then(() => {
            window.location.reload();
          });
        } else {
          this.loginError = "Mot de passe incorrect.";
        }
      } else {
            this.loginError = "Utilisateur inconnu, veuillez vous inscrire.";
          }
        });
      }

  // Inscription
  public register() {
    if (!this.signupUsername || !this.signupEmail || !this.confirmEmail || !this.signupPassword || !this.confirmPassword) {
      this.signupError = "Tous les champs sont requis.";
      return;
    }
    if (this.signupEmail !== this.confirmEmail) {
      this.signupError = "Les emails ne correspondent pas.";
      return;
    }
    if (this.signupPassword !== this.confirmPassword) {
      this.signupError = "Les mots de passe ne correspondent pas.";
      return;
    }
    if (this.signupPassword.length < 8) {
      this.signupError = "Le mot de passe doit contenir au moins 8 caractères.";
      return;
    }
    const newUser = {
      name: this.signupUsername,
      email: this.signupEmail,
      password: this.signupPassword,
    };
    this.service.addUser(newUser).subscribe(() => {
      this.isLogin = true; // passe à la connexion après l'inscription
    });
  }
}
