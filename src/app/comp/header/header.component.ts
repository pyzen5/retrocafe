import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isLogged;
  @Output() login = new EventEmitter();
  @Output() logout = new EventEmitter();
  @Output() toggleTheme = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
