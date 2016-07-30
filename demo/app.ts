import { Component, ViewChild } from '@angular/core';
import { Events, ionicBootstrap, MenuController, Nav, Platform } from 'ionic-angular';
import { Splashscreen, StatusBar } from 'ionic-native';

import {
  IONIC_WORDPRESS_PROVIDERS
} from '../dist/ionic-wordpress';

import {
  WPAPI_PROVIDERS,
  defaultWpApi
} from 'wp-api-angular';

import Home from './components/Home/Home';
console.log('IONIC_WORDPRESS_PROVIDERS', IONIC_WORDPRESS_PROVIDERS)
@Component({
  templateUrl: 'app.html'
})
class IonicWordPressDemo {
  @ViewChild(Nav) nav: Nav;
  root = Home;
  constructor(
    platform: Platform
  ) {
    // Call any initial plugins when ready
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

ionicBootstrap(IonicWordPressDemo, [
  // IONIC_WORDPRESS_PROVIDERS
], {
  tabbarPlacement: 'bottom'
});
