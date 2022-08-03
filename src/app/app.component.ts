import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project1';

  turn: boolean = true;
  fromParent: string = 'This is hi from parent';

  myFunction() {
    let x = document.getElementById('Heading')!;
    if (this.turn == true) {
      x.innerHTML = 'Updated Text';
    } else {
      x.innerHTML = 'This is Previous Text';
    }
    this.turn = !this.turn;
  }
}
