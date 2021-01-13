import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSpacePage } from './add-space.page';

const routes: Routes = [
  {
    path: '',
    component: AddSpacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSpacePageRoutingModule {}
