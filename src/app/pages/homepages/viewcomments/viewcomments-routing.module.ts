import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewcommentsPage } from './viewcomments.page';

const routes: Routes = [
  {
    path: '',
    component: ViewcommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewcommentsPageRoutingModule {}
