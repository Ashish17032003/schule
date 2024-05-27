import { Component } from '@angular/core';
import { CitiesCardComponent } from './cities-card/cities-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CitiesCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
