import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {ServiceCoursService} from "../service/service-cours.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion-inscription',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './connexion-inscription.component.html',
  styleUrl: './connexion-inscription.component.scss'
})
export class ConnexionInscriptionComponent {

  public isLogin = true;
  public username: string = '';
  public password: string = '';
  public loginError: string = '';
  private user: any;
  public users : any;

  // Inscription fields
  public signupUsername: string = '';
  public signupEmail: string = '';
  public confirmEmail: string = '';
  public signupPassword: string = '';
  public confirmPassword: string = '';
  public signupError: string = '';

  constructor(private service: ServiceCoursService, private router: Router) {}

  // Toggle between login and signup forms
  toggleForm() {
    this.isLogin = !this.isLogin;
    this.loginError = '';  // Clear login error message on form switch
    this.signupError = ''; // Clear signup error message on form switch
  }

  login() {
    if (!this.username || !this.password) {
      this.loginError = "Tous les champs sont requis.";
      return;
    }

    this.service.getUserByName(this.username).subscribe((data: any) => {
      if (data) {
        this.user = data;
        this.checkPassword(); // Check the password inside the callback
      } else {
        this.service.getUserByEmail(this.username).subscribe((data: any) => {
          if (data) {
            this.user = data;
            this.checkPassword(); // Check the password inside the callback
          } else {
            this.loginError = "Utilisateur inconnu, veuillez vous inscrire.";
          }
        });
      }
    });
  }

  checkPassword() {
    if (this.user.password === this.password) {
      localStorage.setItem('userName', JSON.stringify(this.user.name)); // Persist login state
      this.router.navigate(['/recettes-toutes']).then(() => {
        window.location.reload();
      });
    } else {
      this.loginError = "Mot de passe incorrect.";
    }
  }

  // Handle registration logic
  register() {
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
      this.router.navigate(['/connexion-inscription']); // Redirection après ajout
    });

  }

}
