import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {
  private apiUrl = '/api/users'; // URL correspondant aux routes Mirage.js

  public constructor(private http: HttpClient) { }

  public getUserByName(name: string): Observable<any> {
    return this.http.get<{ user: any }>(`/api/users/${name}`).pipe(
      map(response => response.user)
    );
  }

  public addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

}
