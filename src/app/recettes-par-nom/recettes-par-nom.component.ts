import { Component, OnInit } from '@angular/core';
import { ServiceRecettesService } from '../service/service-recettes.service';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-recettes-par-nom',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf, RouterLink],
  templateUrl: './recettes-par-nom.component.html',
  styleUrl: './recettes-par-nom.component.scss'
})

export class RecettesParNomComponent implements OnInit {
  protected searchQuery: string = '';
  private recipes: any[] = [];
  protected filteredRecipes: any[] = [];

  public constructor(private service: ServiceRecettesService, private router: Router) {}

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
      recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // navigation des boutons
  protected recettesRandom() {
    this.router.navigate(['/recettes-random']);
  }
  protected recettesToutes() {
      this.router.navigate(['/recettes-toutes']);
  }
}
