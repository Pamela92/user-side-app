import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileAddPageRoutingModule } from './profile-add-routing.module';

import { ProfileAddPage } from './profile-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileAddPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [ProfileAddPage]
})
export class ProfileAddPageModule {}
