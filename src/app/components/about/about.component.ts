import { Component } from '@angular/core';
import { AboutItemComponent } from "../../about-item/about-item.component";

@Component({
  selector: 'app-about',
  imports: [AboutComponent, AboutItemComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
