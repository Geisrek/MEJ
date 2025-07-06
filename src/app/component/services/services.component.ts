import { AgmCoreModule } from '@agm/core';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';


@Component({
  selector: 'app-services',
  imports: [
    GoogleMapsModule,
   
    
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
