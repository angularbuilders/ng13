import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgenciesList } from './agencies/agencies.list';
import { ReloadingComponent } from './reloading/reloading.component';

@NgModule({
  declarations: [ReloadingComponent, AgenciesList],
  imports: [CommonModule, RouterModule],
  exports: [ReloadingComponent, AgenciesList],
})
export class SharedModule {}
