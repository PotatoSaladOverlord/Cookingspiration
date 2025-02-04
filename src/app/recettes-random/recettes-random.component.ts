import { Component } from '@angular/core';
import {ServiceCoursService} from "../service/service-cours.service";
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
  public randomRecipe: any = null;

  constructor(private service: ServiceCoursService) {
  }

  ngOnInit() {
    this.service.getRecipes().subscribe( (data) => {
      this.recipes = data;
      this.getRandomRecipe();
    });
  }

  getRandomRecipe() {
    if (this.recipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.recipes.length);
      this.randomRecipe = this.recipes[randomIndex];
    }
  }

}




