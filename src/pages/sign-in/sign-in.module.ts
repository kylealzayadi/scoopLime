import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SignInPage } from './sign-in';

@NgModule({
  declarations: [
    SignInPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInPage),
    NgxQRCodeModule,
  ],
})
export class SignInPageModule {}
