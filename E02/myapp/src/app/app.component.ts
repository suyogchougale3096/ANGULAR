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
  title = 'myapp';
  imageUrl =
    'https://imgd.aeplcdn.com/1280x720/n/cw/ec/53859/urus-performante-exterior-right-front-three-quarter-4.jpeg';

  displayUrl(): string {
    return this.imageUrl;
  }

  display(): void {
    console.log('Hello World!');
  }

  getText(val: string) {
    console.warn(val);
  }
}
