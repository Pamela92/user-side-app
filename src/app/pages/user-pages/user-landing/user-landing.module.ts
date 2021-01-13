import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserLandingPageRoutingModule } from './user-landing-routing.module';

import { UserLandingPage } from './user-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserLandingPageRoutingModule
  ],
  declarations: [UserLandingPage]
})
export class UserLandingPageModule {}
