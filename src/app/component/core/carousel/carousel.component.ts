import { Component, effect, inject, NgZone, OnDestroy, OnInit, signal } from '@angular/core';
import { interval, Subscribable, Subscription } from 'rxjs';
import { CarouselService } from '../../../services/carousel.service';


@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit,OnDestroy {
  
  index=signal(0);
  private intervalId!:ReturnType<typeof setInterval>;
  carouseServices=inject(CarouselService)
  

  constructor(private ngZone: NgZone){
  
  }
  
  ngOnInit(): void {
    
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          if(this.index()==this.carouseServices.carouselItems.length){
            this.index.set(0)
          }
          else{
          this.index.update(value => value + 1);}
        });
      }, 3000);
    });

   
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); 
  }



  

}
