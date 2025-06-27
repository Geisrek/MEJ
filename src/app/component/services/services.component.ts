import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  imports: [
    GoogleMapsModule,
    BrowserModule,
    AgmCoreModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
   title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

}
