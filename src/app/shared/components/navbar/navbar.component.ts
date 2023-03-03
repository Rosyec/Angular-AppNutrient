import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public links: Links[] = [
    {
      url: '',
      name: 'Home'
    },
    {
      url: '#about-us',
      name: 'About Us'
    },
    {
      url: '#services',
      name: 'Services'
    },
    {
      url: '#faq',
      name: 'FAQ'
    },
    {
      url: '#blog',
      name: 'Blog'
    },
  ];
  public toggle: boolean = false;

  constructor( private route: Router ) {}

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

  onClickNav( url: string ){
    this.onClickLink();
    this.route.navigateByUrl(url);
  }
}

interface Links {
  url: string,
  name: string
}
