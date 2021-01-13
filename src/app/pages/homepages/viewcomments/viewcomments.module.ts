import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewcommentsPageRoutingModule } from './viewcomments-routing.module';

import { ViewcommentsPage } from './viewcomments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewcommentsPageRoutingModule
  ],
  declarations: [ViewcommentsPage]
})
export class ViewcommentsPageModule {}
