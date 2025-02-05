import { Component, OnInit } from '@angular/core';
import { ServiceRecettesService } from '../service/service-recettes.service';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-recettes-toutes',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './recettes-toutes.component.html',
  styleUrl: './recettes-toutes.component.scss'
})
export class RecettesToutesComponent implements OnInit {
  protected recipes: any[] = [];

  public constructor(private service: ServiceRecettesService) {}

  public ngOnInit() {
    this.service.getRecipes().subscribe( (data) => {
      this.recipes = data;
    })
  }
}
