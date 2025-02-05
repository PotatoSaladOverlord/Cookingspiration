import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCoursService {
  public variableDuService: string = 'Je suis la variable du service'
  private apiUrl = '/api'; // URL correspondant aux routes Mirage.js
  private apiUrlUsers = '/api/users'; // URL correspondant aux routes Mirage.js
  private apiUrlRecipes = '/api/recipes'; // URL correspondant aux routes Mirage.js


  constructor(private http: HttpClient) { }

  // Récupérer tous les utilisateurs (GET /api/users)
  public getUsers(): Observable<any> {
    return this.http.get<{ users: any[] }>(this.apiUrlUsers).pipe(
        map(response => response.users) // 👈 On extrait directement le tableau
    );
  }

  public getRecipes(): Observable<any> {
    return this.http.get<{ recipes: any[] }>(this.apiUrlRecipes).pipe(
      map(response => response.recipes)
    )
  }

  addRecipe(recipe: any): Observable<any> {
    return this.http.post(this.apiUrlRecipes, recipe);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrlUsers, user);
  }

  public getRecipeById(id: string): Observable<any> {
    return this.http.get<{ recipe: any }>(`/api/recipes/${id}`).pipe(
      map(response => response.recipe)
    );
  }

  public getUserByName(name: string): Observable<any> {
    return this.http.get<{ user: any }>(`/api/users/${name}`).pipe(
      map(response => response.user)
    );
  }

  public getUserByEmail(email: string): Observable<any> {
    return this.http.get<{ user: any }>(`/api/users/email/${email}`).pipe(
      map(response => response.user)
    );
  }



}
