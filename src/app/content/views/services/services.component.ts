import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  public data: Items[] = [
    {
      small: 'Sustainable Cocoa',
      title: 'Creating lasting benefits for cocoa farmers',
      paragraf:
        'Our ambition is to sustainable provide high quality cocoa and chocolate throughout the world. We creating lasting benefits for cocoa farmers and their comunities.',
    },
    {
      small: 'Sustainable Cotton',
      title: 'Improve sustainable cotton production',
      paragraf:
        'Our ambition is to sustainable provide high quality cocoa and chocolate throughout the world. We creating lasting benefits for cocoa farmers and their comunities.',
    },
    {
      small: 'Sustainable Palm Oil',
      title: 'Building transparent & traceable supply chain',
      paragraf:
        'Our ambition is to sustainable provide high quality cocoa and chocolate throughout the world. We creating lasting benefits for cocoa farmers and their comunities.',
    },
    {
      small: 'Sustainable Seaweed',
      title: 'Achieve better incomes and living standards',
      paragraf:
        'Our ambition is to sustainable provide high quality cocoa and chocolate throughout the world. We creating lasting benefits for cocoa farmers and their comunities.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface Items {
  small: string;
  title: string;
  paragraf: string;
}
