import { Component } from '@angular/core';
import { ServiceRecettesService } from '../service/service-recettes.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-recettes-new',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './recettes-new.component.html',
  styleUrl: './recettes-new.component.scss'
})
export class RecettesNewComponent {

  protected isLoggedIn: boolean = false; // sert à savoir si oui ou non l'utilisateur à accès à la fonctionalité
  // liste de caractéristiques d'une recette
  protected name: string = '';
  protected ingredients: string[] = [];
  protected newIngredient: string = '';
  protected difficulty: number = 1;
  protected price: number = 1;
  protected time: string = '';
  protected text: string = '';

  public constructor(private service: ServiceRecettesService, protected router: Router) {
    const storedUser = localStorage.getItem('userName');
    this.isLoggedIn = !!storedUser; // Vérifie si un utilisateur est connecté
  }

  protected addIngredient() {
    if (this.newIngredient.trim() !== '') {
      this.ingredients.push(this.newIngredient.trim());
      this.newIngredient = ''; // Réinitialiser l'input après ajout
    }
  }

  protected removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  protected submitRecipe() {
    const newRecipe = {
      name: this.name,
      ingredients: this.ingredients,
      difficulty: this.difficulty,
      price: this.price,
      time: this.time,
      text: this.text,
    };

    this.service.addRecipe(newRecipe).subscribe(() => {
      this.router.navigate(['/recettes-toutes']); // Redirection après ajout
    });
  }
}
