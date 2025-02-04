import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ServiceCoursService} from "../service/service-cours.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion-inscription',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './connexion-inscription.component.html',
  styleUrl: './connexion-inscription.component.scss'
})
export class ConnexionInscriptionComponent {

  public isLogin = true;
  public username: string = '';
  public password: string = '';
  public loginError: string = '';

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


    // Call getUsers() to fetch all users
    this.service.getUsers().subscribe(
      (users) => {
        // Find the user in the list
        const user = users.find((u: { username: string; email: string; }) => u.username === this.username || u.email === this.username);

        if (!user) {
          // User not found
          this.loginError = "Cet utilisateur n'existe pas, veuillez vous inscrire";
        } else if (user.password !== this.password) {
          // Incorrect password
          this.loginError = "Le mot de passe est incorrect.";
        } else {
          // All good, navigate to all recipes
          this.router.navigate(['/recettes-toutes']);
        }
      },
      (error) => {
        // Handle any error during the users fetching process
        this.loginError = "Erreur de connexion.";
      }
    );

    this.service.checkUserLogin(this.username, this.password).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigate(['/recettes-toutes']);
        } else if (response.error === 'User not found') {
          this.loginError = "L'utilisateur n'existe pas.";
        } else if (response.error === 'Incorrect password') {
          this.loginError = "Le mot de passe est incorrect.";
        }
      },
      (error) => {
        this.loginError = "Erreur de connexion.";
      }
    );
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

    this.service.registerUser({
      username: this.signupUsername,
      email: this.signupEmail,
      password: this.signupPassword
    }).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigate(['/recettes-toutes']);
        } else {
          this.signupError = "Erreur lors de l'inscription.";
        }
      },
      (error) => {
        this.signupError = "Erreur lors de l'inscription.";
      }
    );
  }

}
