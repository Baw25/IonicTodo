import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeChoicePage } from './home-choice';

@NgModule({
  declarations: [
    HomeChoicePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeChoicePage),
  ],
  exports: [
    HomeChoicePage
  ]
})
export class HomeChoicePageModule {}
