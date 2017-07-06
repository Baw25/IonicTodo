import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemPage } from './add-item';

@NgModule({
  imports: [
    IonicPageModule.forChild(AddItemPage),
  ],
  exports: [
    AddItemPage
  ]
})
export class AddItemPageModule {}
