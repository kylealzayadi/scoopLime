import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage';
  @ViewChild(Nav) nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    }

    toProfile() {
      this.nav.push('ProfilePage');
      this.menuCtrl.close();
    }
    
    toPayment() {
      this.nav.push('PaymentPage');
      this.menuCtrl.close();
    }
    toHistory() {
      this.nav.push('HistoryPage');
      this.menuCtrl.close();
    }
    toHowtouse() {
      this.nav.push('HowtousePage');
      this.menuCtrl.close();
    }
    logout(){
      this.nav.push('LoginPage');
      this.menuCtrl.close();
    }
  }
