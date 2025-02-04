import { Component, OnInit } from '@angular/core';
import { ServiceCoursService } from '../service/service-cours.service';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import { Router } from '@angular/router';


@Component({
  selector: 'app-recettes-par-ingredient',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './recettes-par-ingredient.component.html',
  styleUrl: './recettes-par-ingredient.component.scss'
})

export class RecettesParIngredientComponent implements OnInit {
  public searchQuery: string = '';
  private recipes: any[] = [];
  public filteredRecipes: any[] = [];
  public valeurService:string = '';

  constructor(private service: ServiceCoursService, private router: Router) {}


  ngOnInit() {
    this.valeurService = this.service.variableDuService;
    this.service.getRecipes().subscribe((data) => {
      this.recipes = data;
      this.filteredRecipes = this.recipes;
    })
  }

  searchRecipes() {
    this.filteredRecipes = this.recipes.filter(recipe =>
      recipe.ingredients.some((ingredient: string) =>
        ingredient.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    );
  }

  recettesRandom() {
    this.router.navigate(['/recettes-random']);
  }

  recettesToutes() {
    this.router.navigate(['/recettes-toutes']);
  }
}
