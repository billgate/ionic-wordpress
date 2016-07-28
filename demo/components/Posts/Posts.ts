import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'Posts.html'
})
export default class Posts {

  constructor(
    public nav: NavController
  ) {
  }
}
