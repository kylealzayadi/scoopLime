import { Component, Input, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { HowtousePage } from '../howtouse/howtouse'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @Input('progress') progress;
  pictures;
  public percent = 0;
  public show = false;
  @ViewChild(Nav) nav;
  constructor(public navCtrl: NavController, public database: DatabaseProvider) {
    this.pictures = this.database.get();
    console.log(this.pictures);
  }

  toHowtouse() {
    this.navCtrl.push(HowtousePage);
  }
  ionViewDidEnter() {
    this.percent = 0;
    this.pictures = this.database.get();

    if (this.pictures.length > 0) {
      this.pictures.filter((data) => {
        this.percent += 10;

      })
      if(this.percent === 100){
        this.percent = 10
      }
      this.show = true;
      console.log('donw');

    }
  }

}
