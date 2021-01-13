import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouriteSpacePage } from './favourite-space.page';

const routes: Routes = [
  {
    path: '',
    component: FavouriteSpacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouriteSpacePageRoutingModule {}
