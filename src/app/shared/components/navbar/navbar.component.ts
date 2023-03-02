import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public links: string[] = [];
  public toggle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClickLink() {
    this.toggle = !this.toggle;
    let list = document.getElementById('list');
    if (list) {
      if (this.toggle) {
        list.style.height = '100%';
      } else {
        list.style.height = '0px';
      }
    }
  }
}
