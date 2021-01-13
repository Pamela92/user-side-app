import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserGroupPageRoutingModule } from './user-group-routing.module';

import { UserGroupPage } from './user-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserGroupPageRoutingModule
  ],
  declarations: [UserGroupPage]
})
export class UserGroupPageModule {}
