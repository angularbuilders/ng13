import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';

@NgModule({
  declarations: [AboutPage],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
