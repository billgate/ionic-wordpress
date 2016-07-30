import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import Posts from '../Posts/Posts';

const Menulist = [
  {
    name: 'ion-wp-posts',
    component: Posts
  }
]

@Component({
  templateUrl: 'Home.html'
})
export default class Home {
  menu = Menulist;
  constructor(
    public nav: NavController
  ) {
  }
  goTo(component) {
    this.nav.push(component);
  }
}
