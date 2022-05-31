import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewAgencyRoutingModule } from './new-agency-routing.module';
import { NewAgencyPage } from './new-agency.page';
import { NewAgencyForm } from './new-agency.form';

@NgModule({
  declarations: [NewAgencyPage, NewAgencyForm],
  imports: [CommonModule, NewAgencyRoutingModule],
})
export class NewAgencyModule {}
