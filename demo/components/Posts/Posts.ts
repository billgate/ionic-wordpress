import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  templateUrl: 'Posts.html'
})
export default class Posts {
  data: [any] = require('./data.json');
  constructor(
    public nav: NavController
  ) {
  }
}
