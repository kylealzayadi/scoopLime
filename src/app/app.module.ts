import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/progress/contact';
import { HomePage } from '../pages/home/home';

import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from "@ionic-native/google-maps";
import { Geolocation } from '@ionic-native/geolocation';
import { NgxQRCodeModule} from 'ngx-qrcode2';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { ComponentsModule } from '../components/components.module';
import { TabsPage } from '../pages/tabs/tabs';
import { NavController } from 'ionic-angular';
import { Screenshot } from '../../node_modules/@ionic-native/screenshot';
import { DatabaseProvider } from '../providers/database/database';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    ComponentsModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage
    
  ],
  providers: [
    GoogleMaps,
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    BarcodeScanner,
    Screenshot,
    CameraPreview,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}


