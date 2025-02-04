import {Component, OnInit} from '@angular/core';
import {ServiceCoursService} from "../service/service-cours.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-recettes-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './recettes-detail.component.html',
  styleUrl: './recettes-detail.component.scss'
})
export class RecettesDetailComponent implements OnInit{

  public recipe: any;

  constructor(
    private route: ActivatedRoute,
    private service: ServiceCoursService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (recipeId) {
      this.service.getRecipeById(recipeId).subscribe((data: any) => {
        console.log(data);  // Log the fetched data
        this.recipe = data;
      }, error => {
        console.error('Error fetching recipe:', error);  // Log errors
      });
    }
  }

}
