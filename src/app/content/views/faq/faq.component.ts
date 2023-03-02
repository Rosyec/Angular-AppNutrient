import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  items: string[] = [
    'What is actually Nutrient do?',
    'How can my bussiness work with Nutrient?',
    'How can I become a sharedholder?',
    'How many Nutrient companies are there?',
    'How apply for sponsorship?',
    'Wich products and brands do you own?'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickItem () {
    console.log('Click')
  }

}
