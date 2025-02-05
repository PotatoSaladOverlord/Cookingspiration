import {Component, OnInit} from '@angular/core';
import {ServiceRecettesService} from "../service/service-recettes.service";
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

  protected recipe: any;

  constructor(
    private route: ActivatedRoute,
    private service: ServiceRecettesService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (recipeId) {
      this.service.getRecipeById(recipeId).subscribe((data: any) => {
        this.recipe = data;
      });
    }
  }

}
