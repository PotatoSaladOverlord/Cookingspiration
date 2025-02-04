import { Component, OnInit } from '@angular/core';
import { ServiceCoursService } from '../service/service-cours.service';
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
  public recipes: any[] = [];

  constructor(private service: ServiceCoursService) {}

  ngOnInit() {
    this.service.getRecipes().subscribe( (data) => {
      this.recipes = data;
    })
  }
}
