import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EXP3';
  message: string = 'Not yet clicked on button';
  urusImage =
    'https://imgd-ct.aeplcdn.com/664x415/cw/ec/32406/Lamborghini-Urus-Exterior-115483.jpg';
  carname = 'Lamborgini Urus';

  // Function

  getMessage(): void {
    this.message = 'Clicked on button.';
  }
}
