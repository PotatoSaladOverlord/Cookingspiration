import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceRecettesService {
  private apiUrl = '/api/recipes'; // URL correspondant aux routes Mirage.js

  public constructor(private http: HttpClient) { }

  public getRecipes(): Observable<any> {
    return this.http.get<{ recipes: any[] }>(this.apiUrl).pipe(
      map(response => response.recipes)
    )
  }

  public addRecipe(recipe: any): Observable<any> {
    return this.http.post(this.apiUrl, recipe);
  }

  public getRecipeById(id: string): Observable<any> {
    return this.http.get<{ recipe: any }>(`/api/recipes/${id}`).pipe(
      map(response => response.recipe)
    );
  }

}
