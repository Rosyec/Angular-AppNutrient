import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ServicesComponent } from './views/services/services.component';
import { FaqComponent } from './views/faq/faq.component';
import { BlogComponent } from './views/blog/blog.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutUsComponent,
    ServicesComponent,
    FaqComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule
  ]
})
export class ContentModule { }
