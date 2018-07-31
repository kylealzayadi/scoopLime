import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '../../../node_modules/@ionic-native/barcode-scanner';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { normalizeURL } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  img;
  myphoto: any;
  options;
  public picture;

  constructor(private barcodeScanner: BarcodeScanner, private camera: Camera, private sanitizer: DomSanitizer, public navCtrl: NavController, public database: DatabaseProvider, public cameraPreview: CameraPreview) {
    this.myphoto = "https://www.collinsdictionary.com/images/thumb/duck_170690246_250.jpg?version=3.1.158";
    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }


  }
  ionViewDidEnter() {
    console.log('load');
    this.cameraPreview.stopCamera();
    // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });

  }


  takeAnother() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

      // this.myphoto = 'data:image/jpeg;base64,' + imageData;
      let img = normalizeURL(imageData);
      console.log(img);
      this.myphoto = this.sanitizer.bypassSecurityTrustResourceUrl(img);
      this.database.add(img);
      this.takeAnother();
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }


  createCode() {
    this.createdCode = this.qrData;

  }
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    });

  }

  ionViewDidLeave(){
    console.log('stop');
    // Stop the camera preview
this.cameraPreview.stopCamera();
  }

  takePhoto(){
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85,
    }
    

    
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {

      this.picture = 'data:image/jpeg;base64,' + imageData;
      this.database.add(this.picture);
      // let img = normalizeURL(imageData);
      // console.log(img);
      // this.myphoto = this.sanitizer.bypassSecurityTrustResourceUrl(img);
      // this.database.add(img);
    }, (err) => {
      console.log(err);
      
    });
    
  }

}

