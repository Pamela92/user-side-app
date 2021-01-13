import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerLandingPageRoutingModule } from './owner-landing-routing.module';

import { OwnerLandingPage } from './owner-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerLandingPageRoutingModule
  ],
  declarations: [OwnerLandingPage]
})
export class OwnerLandingPageModule {}
