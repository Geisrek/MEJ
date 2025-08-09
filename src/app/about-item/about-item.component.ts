import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-item',
  imports: [],
  templateUrl: './about-item.component.html',
  styleUrl: './about-item.component.css'
})
export class AboutItemComponent {
@Input() imagePath!: string;
@Input() text!: string;
}
