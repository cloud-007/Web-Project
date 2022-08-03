import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input() myVariable = 'This is my text';
  @Output() myOutput = 'This is text from child';

  ngOnInit(): void {}
}
