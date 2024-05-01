import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Module imported
import { add } from './mathFunctions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // 1. Types
  title = 'my-app';
  name: string = 'suyog chougale';
  // -------------------------------------------

  // 2. Functions
  display(): void {
    console.log('Hello World!');
  }
  // ---------------------------------------------

  // 3. class
  course_id = 0;
  cource_name = '';

  constructor() {
    this.course_id = 101;
    this.cource_name = 'MEAN';
  }

  displayInfo(): string {
    // Add
    console.log(add(5, 3));
    return this.course_id + ' ' + this.cource_name;
  }
  // --------------------------------------------------------
}
