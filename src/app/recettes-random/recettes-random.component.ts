import { Component, OnInit} from '@angular/core';
import {ServiceRecettesService} from "../service/service-recettes.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-recettes-random',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './recettes-random.component.html',
  styleUrl: './recettes-random.component.scss'
})
export class RecettesRandomComponent {
  private recipes: any[] = [];
  protected randomRecipe: any = null;

  public constructor(private service: ServiceRecettesService) {}

  public ngOnInit() {
    this.service.getRecipes().subscribe( (data) => {
      this.recipes = data;
      this.getRandomRecipe();
    });
  }

  protected getRandomRecipe() {
    if (this.recipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.recipes.length);
      this.randomRecipe = this.recipes[randomIndex];
    }
  }

}




