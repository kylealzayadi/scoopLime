import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  BaseArrayClass
} from '@ionic-native/google-maps';
import { Platform,Nav, NavController } from 'ionic-angular';
import { Component, ViewChild } from "@angular/core/";
import { Geolocation } from '@ionic-native/geolocation';
import { HowtousePage } from '../howtouse/howtouse';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  map;
  lat;
  long;
  @ViewChild(Nav) nav;




  constructor(public platform: Platform, private geolocation: Geolocation, public navCtrl: NavController ) {
    platform.ready().then(() => {
      console.log('loading map')
      this.loadMap();
      
      
      
    });



  }
  toHowtouse() {
    this.navCtrl.push(HowtousePage);
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

        },
        //Current Location
        {
          position: { lat: this.lat, lng: this.long },
          icon: Image
        },
        //Jimmie Baldwin's Adrressss
        {
          position: { lat: 33.924052, lng: -118.260817 },
        },
        //The Cube
        {
          position: {
            lat: 34.017392, lng: -118.278463,
          }
        },
        //School
        {
          position: { lat: 34.096271, lng: -118.314839 },
        }
      ])

      // where to load the map and how zommed in
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: this.lat,
            lng: this.long
          },
          zoom: 18,
          tilt: 30,
        },
        styles: [
          
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#7f2200"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#87ae79"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#495421"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": 4.1
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#abce83"
                    },
                    {
                        "lightness": "10"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "lightness": "25"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#769E72"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7B8758"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#EBF4A4"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#8dab68"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#5B5B3F"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ABCE83"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#EBF4A4"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#9BBF72"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#A4C67D"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#aee2e0"
                    }
                ]
            }
        ]}
        

      // create the map
      this.map = GoogleMaps.create('map_canvas', mapOptions);


      this.map.moveCamera
      // add the markers
      MARKERS.forEach((data: any) => {
        data.disableAutoPan = true;
        let marker: Marker = this.map.addMarkerSync(data);
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((res) => 
        
        {
          this.map.animateCamera({
            target: data.position,
            zoom: 17,
            tilt: 60,
            bearing: 140,
            duration: 2000
          }).then(() => {
            //alert("Camera target has been changed");
          });
        }
      );
      })
      

    });
  }
  

}