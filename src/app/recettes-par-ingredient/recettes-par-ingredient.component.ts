import { Component, OnInit } from '@angular/core';
import { ServiceRecettesService } from '../service/service-recettes.service';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-recettes-par-ingredient',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterLink,
  ],
  templateUrl: './recettes-par-ingredient.component.html',
  styleUrl: './recettes-par-ingredient.component.scss'
})

export class RecettesParIngredientComponent implements OnInit {
  protected searchQuery: string = '';
  private recipes: any[] = [];
  protected filteredRecipes: any[] = [];

  public constructor(private service: ServiceRecettesService) {}

  // charge toutes les recettes au départ et les met dans filteredRecipes
  public ngOnInit() {
    this.service.getRecipes().subscribe((data) => {
      this.recipes = data;
      this.filteredRecipes = this.recipes;
    })
  }

  // change les recettes filtrées
  protected searchRecipes() {
    this.filteredRecipes = this.recipes.filter(recipe =>
      recipe.ingredients.some((ingredient: string) =>
        ingredient.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    );
  }
}
