import { Component } from '@angular/core';
import { ContactPage } from '../progress/contact';
import { HomePage } from '../home/home';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = ContactPage;
  tab4Root = SignInPage;

  constructor() {

  }
}
