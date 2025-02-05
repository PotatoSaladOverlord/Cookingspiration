import { Component, OnInit } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  userName: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const storedUserName = localStorage.getItem('userName');
    this.userName = storedUserName ? storedUserName.replace(/^"|"$/g, '') : null
  }

  logout() {
    localStorage.removeItem('userName'); // Remove user from storage
    this.userName = null; // Update UI
    this.router.navigate(['/']); // Redirect to home
  }
}
