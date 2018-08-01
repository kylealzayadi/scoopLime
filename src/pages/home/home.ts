import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  BaseArrayClass,
  HtmlInfoWindow
} from '@ionic-native/google-maps';
import { Platform, Nav, NavController, IonicPage, NavParams } from 'ionic-angular';
import { Component, ViewChild } from "@angular/core/";
import { Geolocation } from '@ionic-native/geolocation';
import { HowtousePage } from '../howtouse/howtouse';
import { BarcodeScanner } from '../../../node_modules/@ionic-native/barcode-scanner';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { normalizeURL } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { ContactPage } from '../progress/contact';
import { SignInPage } from '../sign-in/sign-in';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  map;
  lat;
  long;
  @ViewChild(Nav) nav;





  constructor(public platform: Platform, private geolocation: Geolocation, public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private camera: Camera, private sanitizer: DomSanitizer, public database: DatabaseProvider, public cameraPreview: CameraPreview) {
    platform.ready().then(() => {
      console.log('loading map')
      this.loadMap();




    })
  };
  gocamera() {
    this.navCtrl.push(SignInPage);
  }


  loadMap() {



    const options = {
      enableHighAccuracy: true
    }

    this.geolocation.getCurrentPosition(options).then((resp) => {
      this.lat = +resp.coords.latitude;
      this.long = +resp.coords.longitude;
      var Image = 'assets/imgs/pinp.png';
      let MARKERS: BaseArrayClass<any> = new BaseArrayClass<any>([
        //UCLA
        {
          position: { lat: 34.0689, lng: -118.4452 },
          icon: {
            url: 'assets/imgs/pinp.png',
            size: {
              width: 26,
              height: 44
            }
          }

        },
        //Current Location
        {
          position: { lat: this.lat, lng: this.long },
          icon: {
            url: 'assets/imgs/current.png',
            size: {
              width: 26,
              height: 44
            }
          }
        },
        //Jimmie Baldwin's Adrressss
        {
          position: { lat: 33.924052, lng: -118.260817 },
          icon: {
            url: 'assets/imgs/pinp.png',
            size: {
              width: 26,
              height: 44
            }
          }
        },
        //The Cube
        {
          position: {
            lat: 34.017392, lng: -118.278463,
          },
          icon: {
            url: 'assets/imgs/pinp.png',
            size: {
              width: 26,
              height: 44
            }
          }
        },
        //School
        {
          position: { lat: 34.096271, lng: -118.314839 },
          icon: {
            url: 'assets/imgs/pinp.png',
            size: {
              width: 26,
              height: 44
            }
          }
        }
      ])

      // where to load the map and how zommed in
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: this.lat,
            lng: this.long
          },
          zoom: 14,
          tilt: 30,
        },
        styles: [


        ]
      }



      // create the map
      this.map = GoogleMaps.create('map_canvas', mapOptions);


      this.map.moveCamera;




      // add the markers
      MARKERS.forEach((data: any) => {
        let htmlInfoWindow = new HtmlInfoWindow();

        let frame: HTMLElement = document.createElement('div');
        frame.innerHTML = [
          '<button id="navigate">click</button>',
        ].join("");
        htmlInfoWindow.setContent(frame, {
          width: "100px",
          height: "50px"
        });


        data.disableAutoPan = true;
        let marker: Marker = this.map.addMarkerSync(data);
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((res) => {
          this.map.animateCamera({
            target: data.position,
            zoom: 17,
            tilt: 60,
            bearing: 140,
            duration: 2000
          }).then(() => {
            //alert("Camera target has been changed");
          });

          // htmlInfoWindow.open(marker).then(() => {

          //   document.getElementById('navigate').addEventListener('click', () => {

          //     this.navigate();
          //   })
          // })

        }
        );
      });




    });

  }

  toProgress() {
    this.navCtrl.push(ContactPage);

  }

  navigate() {
    console.log('click');
  }
}
