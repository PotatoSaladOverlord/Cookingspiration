import { Component } from '@angular/core';
import { ServiceCoursService } from '../service/service-cours.service';
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
  public name: string = '';
  public ingredients: string[] = [];
  public newIngredient: string = '';
  public difficulty: number = 1;
  public price: number = 1;
  public time: string = '';
  public text: string = '';
  public isLoggedIn: boolean = false;


  constructor(private service: ServiceCoursService, protected router: Router) {
    const storedUser = localStorage.getItem('userName');
    this.isLoggedIn = !!storedUser; // Vérifie si un utilisateur est connecté
  }
  addIngredient() {
    if (this.newIngredient.trim() !== '') {
      this.ingredients.push(this.newIngredient.trim());
      this.newIngredient = ''; // Réinitialiser l'input après ajout
    }
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  submitRecipe() {
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
