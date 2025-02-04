import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, NgClass, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public list: string[] = ['1', '2', '3'];
  public color: string = 'red';

  public updateColor(colorOutPut: any) {
    this.color = colorOutPut;
  }
}
