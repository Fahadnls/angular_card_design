import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectFont() {
    // Implement font selection logic
  }

  selectSize() {
    // Implement size selection logic
  }

  selectColor() {
    // Implement color selection logic
  }

  alignText(alignment: string) {
    // Implement text alignment logic
  }

  changeFontSize(change: number) {
    // Implement font size change logic
  }

  done() {
    // Implement done logic
  }

  reset() {
    // Implement reset logic
  }
}
