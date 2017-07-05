import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){

    this.items = [
      {title: "Take Out Trash", description: "Take out the two bags of trash"},
      {title: "Call Mom", description: "Talk to mom about interesting things"},
      {title: "Feed the dogs", description: "Take the dogs out to a steak dinner"},
      {title: "Balance Budget", description: "Do some stuff with my spreadsheets"},
      {title: "Buy groceries", description: "Buy fruits and veggies"}
     ];

  }

  addItem(){

  }

  viewItem(){

  }


}
